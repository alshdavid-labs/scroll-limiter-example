import React, { Component, Fragment } from "react";
import { throttle } from "./throttle";

const DEFAULT_PAGE_SIZE = 10;

export type ScrollLimiterProps = {
  pageSize?: number;
  children: JSX.Element[];
};

export class ScrollLimiter extends Component<ScrollLimiterProps, {}> {
  private readonly pageSize: number;
  private itemsToShow: number;

  constructor(props: ScrollLimiterProps) {
    super(props);
    this.pageSize = props.pageSize || DEFAULT_PAGE_SIZE;
    this.itemsToShow = props.pageSize || DEFAULT_PAGE_SIZE;
  }

  componentDidMount(): void {
    window.addEventListener("scroll", this.onScroll);
    this.onScroll();
  }

  componentWillUnmount(): void {
    window.removeEventListener("scroll", this.onScroll);
  }

  onScroll = throttle(() => {
    if (this.itemsToShow > this.props.children.length) {
      return;
    }

    const top = window.scrollY;
    const bottom = top + document.documentElement.clientHeight;
    const loadZone =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    console.log(document.documentElement.clientHeight);

    if (bottom > loadZone) {
      this.itemsToShow += this.pageSize;
      this.forceUpdate();
    }
  }, 500);

  render() {
    return (
      <Fragment>{this.props.children.slice(0, this.itemsToShow)}</Fragment>
    );
  }
}
