import React from 'react';

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
    const { children } = this.props;
    const { isOpen } = this.state;
    return children({ isOpen, setIsOpen: this.setIsOpen, componentRef: this.componentRef });
  }
}

export default WithClickOutside;
