import React, {Component} from 'react';

export default class ErrorBoundary extends Component {
  state = {error: null};

  // error를 받아서 새로운 상태값을 return하는 static 함수
  static getDerivedStateFromError(error) {
    return {error};
  }

  render() {
    const {error} = this.state;
    const {children, fallback} = this.props;
    if (error) return <fallack error={error} />;
    return children;
  }
}