import React, { Component } from 'react';
import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop';

export default props => (
  <section className="topleft">
    <div className="bl-box row valign-wrapper">
      <div className="row valign-wrapper mb-0">
        <div className="title-heading">
          <div className="selector uppercase" id="selector">
            <h3 className="ah-headline p-none m-none clip">
              <span className="font-weight-400">Hi There ! I'm</span>
              <span className="my-name">Si Yong Kim</span>
              <span className="ah-words-wrapper">
                <TypistLoop interval={3000}>
                  {['developer', 'blogger', 'musician'].map(title => (
                    <Typist 
                      className="is-visible"
                      avgTypingDelay={150}
                    >{title}</Typist>
                  ))}
                </TypistLoop>
              </span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </section>
);

