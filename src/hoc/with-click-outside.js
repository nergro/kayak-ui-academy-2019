import React from 'react';

export default Component => {
  class WithClickOutside extends React.Component {
    constructor() {
      super();
      this.state = {
        isOpen: false
      };
      this.componentRef = React.createRef();
    }

    componentDidMount() {
      document.addEventListener('mousedown', this.handleClickOutside);
    }

    componentWillUnmount() {
      document.removeEventListener('mousedown', this.handleClickOutside);
    }

    setIsOpen = () => {
      this.setState({
        isOpen: true
      });
    };

    handleClickOutside = event => {
      if (this.componentRef && !this.componentRef.current.contains(event.target)) {
        this.setState({
          isOpen: false
        });
      }
    };

    render() {
      return (
        <Component
          {...this.props}
          isOpen={this.state.isOpen}
          setIsOpen={this.setIsOpen}
          componentRef={this.componentRef}
        />
      );
    }
  }

  return WithClickOutside;
};
