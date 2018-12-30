import React, { Component } from 'react';

class Intro extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.rotateBElements();
  }

  rotateBElements() {
    setInterval(() => {
      let { roleTitle, changeRoleTitle } = this.props;
      if (roleTitle === 'developer') {
        changeRoleTitle('musician');
      } else if (roleTitle === 'musician') {
        changeRoleTitle('blogger');
      } else {
        changeRoleTitle('developer');
      }
    }, 3000)
  }

  render() {
    let { roleTitle } = this.props;
    let titleEle;
    if (roleTitle === 'developer') {
      titleEle = <b className="is-visible">developer</b>;
    } else if (roleTitle === 'musician') {
      titleEle = <b className="is-visible">musician</b>;
    } else {
      titleEle = <b className="is-visible">blogger</b>;
    }
    return (
    <section className="topleft">
      <div className="bl-box row valign-wrapper">
        <div className="row valign-wrapper mb-0">
          <div className="title-heading">
            <div className="selector uppercase" id="selector">
              <h3 className="ah-headline p-none m-none clip">
                <span className="font-weight-400">Hi There ! I'm</span>
                <span className="my-name">Si Yong Kim</span>
                <span className="ah-words-wrapper">
                  {titleEle}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
    );
  }
}

export default Intro;
