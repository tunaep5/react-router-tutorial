import React, { Component } from 'react';

class HistorySample extends Component {
  handleGoBack = () => {
    this.props.history.goBack();
  };

  handleGoHome = () => {
    this.props.history.push('/');
  };

  componentDidMount() {
    // 페이지에 변화가 생기려 할 때마다 질문
    this.unblock = this.props.history.block('정말 이 페이지를 떠나시겠습니까?');
  }

  componentWillUnmount() {
    // 컴포넌트가 언마운트되면 질문 그만
    if (this.unblock) {
      this.unblock();
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleGoBack}>Go Back</button>
        <button onClick={this.handleGoHome}>Go Home</button>
      </div>
    );
  }
}

export default HistorySample;
