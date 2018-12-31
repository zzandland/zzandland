import React, { Component } from 'react';

class PortfolioRows extends Component {
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

  render() {
    const { isHovered } = this.state;
    return (
      <div 
        onMouseEnter={() => this.handleHover()}
        onMouseLeave={() => this.handleHover()}
        className="row center-align da-thumbs" id="bl-work-items">
        <div className="col s12 m6 l6 xl4" data-panel="panel-1">
          <a href="#">
          <img className="responsive-img" src="http://via.placeholder.com/535x400" alt="Project" />
          {isHovered ? 
            <div className="valign-wrapper"><span className="font-weight-700 uppercase">Image Project</span></div>
          : null
          }
          </a>
        </div>
      </div>
    ); 
  }
}

export default PortfolioRows;
