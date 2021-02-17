const BlackWave = (props) => (
  <React.Fragment>

  <div className="new-wave-effect wave-anim">
  <div className="waves-shape shape-two">
  <div className="wave wave-three"></div>
  </div>
  </div>

  <style jsx>{
    `
.new-wave-anim .new-wave-three {
    animation: move_wave 15s linear infinite;
}
.shape-two .wave {
    background-image: url(../images/${props.title});
}
.new-wave-three {
    background-size: 50% 100px;
}
.new-waves-shape {
    position: absolute;
    bottom: -1px;
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.shape-two {
    z-index: 10;
    opacity: 1;
}
.new-wave-effect {
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 150px;
    overflow: hidden;
    bottom: 0;
}

@media only screen and (max-width: 600px) {
  .wave-three {
      background-size: 100% 100px;
  }
}



    `

  }
  </style>
   </React.Fragment>
);
export default BlackWave;
