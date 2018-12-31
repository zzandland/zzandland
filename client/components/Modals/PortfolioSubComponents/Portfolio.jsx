import React, { Component } from 'react';

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHovered: false,
    };
  }

  handleHover() {
    const { isHovered } = this.state;
    this.setState({
      isHovered: !isHovered,
    })
  }

  openDetailsModal() {
    const { showModal, portfolio } = this.props;
    showModal('details', {
      ...portfolio,
      open: true,
    })
  }

  render() {
    const { isHovered } = this.state;
    const { portfolio } = this.props;
    return (
      <div className="col s12 m6 l6 xl4" data-panel="panel-1">
        <a 
          onMouseEnter={() => this.handleHover()}
          onMouseLeave={() => this.handleHover()}
          onClick={() => this.openDetailsModal()}
        >
          <img className="responsive-img" src={portfolio.images[0]} alt="Project" />
          {isHovered ? 
            <div className="valign-wrapper"><span className="font-weight-700 uppercase">{portfolio.title}</span></div>
          : null
          }
        </a>
      </div>
    ); 
  }
}

export default Portfolio;
