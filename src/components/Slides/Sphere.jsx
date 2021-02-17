import { Component } from 'react';
import * as THREE from '../../lib/threejs/build/three.module.js';
import { GLTFLoader } from '../../lib/threejs/jsm/loaders/GLTFLoader.js';
import { panAxies, sphereAxis, panToSpherePosition } from '../../lib/helper';
let renderer;
let scene, scene1, scene2, scene3, scene4, camera, camera1, camera2, camera3, camera4, animationID;
let modelCenter, modelLeft, modelRight, modelPan, modelCircle;
let mixer, mixer1, mixer2, panMixer;
let idleActionCenter,
  slideInActionCenter,
  forwardActionCenter,
  transitionInCenter,
  transitionOutCenter;
let transitionInActionLeft,
  transitionOutActionLeft,
  transitionInActionRight,
  transitionOutActionRight;
let panActions = {};
let animationType = '';

// const charPoses = {
//   exit: { opacity: 0, y: 20 },
//   enter: {
//     opacity: 1,
//     y: 0,
//     delay: ({ charIndex }) => charIndex * 80,
//   },
// };

export default class Sphere extends Component {
  componentDidMount() {
    if (
      this.props.activeSlide === this.props.slideId &&
      !document.getElementById('sphere').hasChildNodes()
    ) {
      // this.collapseModel();
    }
  }
  componentDidUpdate(prevProps, prevState) {
    let elem = document.getElementById('sphere');
    if (
      this.props.activeSlide !== prevProps.activeSlide &&
      this.props.activeSlide === this.props.slideId &&
      elem &&
      !elem.hasChildNodes()
    ) {
      // this.collapseModel(false);
    }
    if (prevProps.activeSphereTab !== this.props.activeSphereTab) {
      if (this.props.activeSphereTab === 2) {
        // this.sphereToPan();
        // $(".dfltslide").addClass("slidezeroto");
        // $(".dfltslide").removeClass("slidezero");
        // $(".dfltss").attr("onClick", "");
      } else if (this.props.activeSphereTab === 1) {
        // this.panToSphere();
        // $(".dfltslide").addClass("slidezero");
        // $(".dfltslide").removeClass("slidezeroto");
      }
    }
    if (prevProps.activeSlide > 0 && this.props.activeSlide === 0) {
      // if (this.props.activeSphereTab === 2) {
      //   this.sphereToPan();
      // }
    }
  }
  // collapseModel = async () => {
  //   let height = window.innerHeight;
  //   let width = window.innerWidth;
  //   var clock = new THREE.Clock();
  //   var container = document.getElementById('sphere');
  //   var mouse = new THREE.Vector2();

  //   renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  //   renderer.setPixelRatio(window.devicePixelRatio);
  //   renderer.setSize(width, height);
  //   renderer.setClearColor(0xffffff, 0);
  //   renderer.outputEncoding = THREE.sRGBEncoding;
  //   container.appendChild(renderer.domElement);

  //   scene = new THREE.Scene();
  //   scene1 = new THREE.Scene();
  //   scene2 = new THREE.Scene();
  //   scene3 = new THREE.Scene();
  //   scene4 = new THREE.Scene();

  //   camera = this.createCamera({ x: 6, y: 2.8, z: 9 }, width, height);
  //   camera1 = this.createCamera({ x: 5.8, y: 2.5, z: 13 }, width, height);
  //   camera2 = this.createCamera({ x: 5, y: 2, z: 9 }, width, height);
  //   camera3 = this.createCamera({ x: 5, y: 2, z: 8 }, width, height);
  //   camera4 = this.createCamera({ x: 5, y: 2, z: 8 }, width, height);

  //   let response = await this.loadAllModels(false);

  //   scene = this.createLight(scene, '0xed9f56');
  //   scene1 = this.createLight(scene1, '0xed9f56');
  //   scene2 = this.createLight(scene2, '0xed9f56');
  //   scene3 = this.createPanLight(scene3);

  //   let gltfCenter = response[0];
  //   let gltfCenter2 = response[1];
  //   let gltfLeft = response[2];
  //   let gltfRight = response[3];
  //   let gltfPan = response[4];

  //   modelCenter = this.adjustModel(
  //     gltfCenter.scene,
  //     sphereAxis.center.position,
  //     sphereAxis.center.scaling,
  //     sphereAxis.center.rotation,
  //     true
  //   );
  //   scene2.add(modelCenter);

  //   modelLeft = this.adjustModel(
  //     gltfLeft.scene,
  //     sphereAxis.left.position,
  //     sphereAxis.left.scaling,
  //     sphereAxis.left.rotation,
  //     true
  //   );
  //   scene.add(modelLeft);

  //   modelRight = this.adjustModel(
  //     gltfRight.scene,
  //     sphereAxis.right.position,
  //     sphereAxis.right.scaling,
  //     sphereAxis.right.rotation,
  //     true
  //   );
  //   scene1.add(modelRight);

  //   modelPan = this.adjustModel(
  //     gltfPan.scene,
  //     panAxies.position,
  //     panAxies.scaling,
  //     panAxies.rotation,
  //     false
  //   );
  //   scene3.add(modelPan);

  //   modelCircle = this.drawCircle(1.5, {
  //     x: panAxies.position.x + 0.8,
  //     y: panAxies.position.y + 0.4,
  //     z: panAxies.position.z,
  //   });
  //   scene4.add(modelCircle);

  //   mixer = this.setLeftModelAnimation(modelLeft, gltfLeft);
  //   mixer1 = this.setRightModelAnimation(modelRight, gltfRight);
  //   mixer2 = this.setCenterModelAnimation(modelCenter, gltfCenter, gltfCenter2);
  //   panMixer = this.createPanAnimations(modelPan, gltfPan);

  //   if (this.props.activeSphereTab === 1) {
  //     this.initialSphereAnimation();
  //   } else {
  //     this.sphereToPan();
  //   }

  //   let raycaster = new THREE.Raycaster();

  //   mixer.addEventListener('finished', function (e) {
  //     if (e.action._clip.name === 'slide_out') {
  //       modelLeft.traverse(function (object) {
  //         if (object.isMesh) {
  //           object.visible = false;
  //         }
  //       });
  //     }
  //   });
  //   mixer1.addEventListener('finished', function (e) {
  //     if (e.action._clip.name === 'slide_out') {
  //       modelRight.traverse(function (object) {
  //         if (object.isMesh) {
  //           object.visible = false;
  //         }
  //       });
  //     }
  //   });
  //   mixer2.addEventListener('finished', function (e) {
  //     if (e.action._clip.name === 'slide_in') {
  //       slideInActionCenter.stop();
  //       forwardActionCenter.play();
  //     } else if (e.action._clip.name === 'forward') {
  //       idleActionCenter.play();
  //       modelCenter.scale.set(
  //         sphereAxis.center.idleScaling.x,
  //         sphereAxis.center.idleScaling.y,
  //         sphereAxis.center.idleScaling.z
  //       );
  //       forwardActionCenter.stop();
  //     } else if (e.action._clip.name === 'transit_in') {
  //       transitionInCenter.stop();
  //       idleActionCenter.play();
  //       setTimeout(() => {
  //         modelCenter.scale.set(
  //           sphereAxis.center.idleScaling.x,
  //           sphereAxis.center.idleScaling.y,
  //           sphereAxis.center.idleScaling.z
  //         );
  //       });
  //     } else if (e.action._clip.name === 'transit_out') {
  //       modelCenter.traverse(function (object) {
  //         if (object.isMesh) {
  //           object.visible = false;
  //         }
  //       });
  //       modelCenter.scale.set(
  //         sphereAxis.center.idleScaling.x,
  //         sphereAxis.center.idleScaling.y,
  //         sphereAxis.center.idleScaling.z
  //       );
  //     }
  //   });
  //   panMixer.addEventListener('finished', function (e) {
  //     if (e.action._clip.name === 'transit_in') {
  //       panActions.idleClipAction.play();
  //     } else if (e.action._clip.name === 'transit_out') {
  //       modelPan.traverse(function (object) {
  //         if (object.isMesh) {
  //           object.visible = false;
  //         }
  //       });
  //     } else if (e.action._clip.name === 'signature') {
  //       panActions.signatureAction.stop();
  //       panActions.idleClipAction.play();
  //     }
  //   });

  //   let playing = false;
    
  //   function clicked(isClicked) {
  //     raycaster.setFromCamera(mouse, camera4);
  //     var intersects = raycaster.intersectObject(scene4.children[0], true);
  //     if (intersects.length > 0) {
  //       if (!playing) {
      
  //         playing = true;
  //         panActions.idleClipAction.stop();
  //         if (isClicked) {
  //           panActions.signatureAction.stop();
  //         }
  //         panActions.signatureAction.play();
  //       }
  //     } else {
  //       if (playing) {
  //         // console.log('out');
  //         playing = false;
  //         panActions.signatureAction.stop();
  //         panActions.idleClipAction.play();
  //       }
  //     }
  //   }

  //   const slide = document.getElementById(`slide-${this.props.slideId}`);
  //   slide.addEventListener('mousemove', (event) => {
  //     if (this.props.activeSphereTab === 2) {
  //       mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
  //       mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
  //       clicked();
  //     }
  //   });
  //   slide.addEventListener('click', (event) => {
  //     console.log("so this event happened");
  //     if (this.props.activeSphereTab === 2 && playing) {
  //       panActions.idleClipAction.stop();
  //       panActions.signatureAction.stop();
  //       panActions.signatureAction.play();
  //     }
  //   });
  //   animate();

  //   window.onresize = function () {
  //     height = window.innerHeight;
  //     width = window.innerWidth;
  //     camera.aspect = width / height;
  //     camera.updateProjectionMatrix();

  //     renderer.setSize(width, height);
  //   };

  //   function animate() {
  //     animationID = requestAnimationFrame(animate);
  //     if (animationType === 'sphereToPan') {
  //       if (modelPan.position.x < panToSpherePosition.x) {
  //         modelPan.position.x += 0.01;
  //         modelCenter.position.x += 0.01;
  //         modelCircle.position.x += 0.01;
  //       }
  //       if (modelPan.position.y > panToSpherePosition.y) {
  //         modelPan.position.y -= 0.01;
  //         modelCenter.position.y -= 0.01;
  //         modelCircle.position.y -= 0.01;
  //       }
  //     } else if (animationType === 'panToSphere') {
  //       if (modelPan.position.x > panAxies.position.x) {
  //         modelPan.position.x -= 0.1;
  //         modelCenter.position.x -= 0.1;
  //         modelCircle.position.x -= 0.1;
  //       }
  //       if (modelPan.position.y < panAxies.position.y) {
  //         modelPan.position.y += 0.01;
  //         modelCenter.position.y += 0.01;
  //         modelCircle.position.y += 0.01;
  //       }
  //     }
  //     var delta = clock.getDelta();
  //     if (mixer) {
  //       mixer.update(delta);
  //     }
  //     if (mixer1) {
  //       mixer1.update(delta);
  //     }
  //     if (mixer2) {
  //       mixer2.update(delta);
  //     }
  //     if (panMixer) {
  //       panMixer.update(delta);
  //     }
  //     renderer.autoClear = true;
  //     renderer.render(scene, camera);
  //     renderer.autoClear = false;
  //     renderer.render(scene1, camera1);
  //     renderer.autoClear = false;
  //     renderer.render(scene2, camera2);
  //     renderer.autoClear = false;
  //     renderer.render(scene3, camera3);
  //     renderer.autoClear = false;
  //     renderer.render(scene4, camera4);
  //   }
  // };

  // sphereToPan = () => {
  //   if (modelCenter) {
  //     animationType = 'sphereToPan';
  //     modelCenter.traverse(function (object) {
  //       if (object.isMesh) {
  //         object.visible = true;
  //       }
  //     });
  //     transitionOutActionLeft.stop();
  //     transitionOutActionRight.stop();
  //     transitionOutCenter.stop();
  //     transitionOutActionLeft.play();
  //     transitionOutActionRight.play();
  //     modelCenter.scale.set(15, 15, 15);
  //     modelPan.traverse(function (object) {
  //       if (object.isMesh) {
  //         object.visible = true;
  //       }
  //     });
  //     panActions.transit_inAction.stop();
  //     panActions.transit_inAction.play();
  //     transitionOutCenter.play();
  //   }
  // };
  // panToSphere = () => {
  //   if (modelCenter) {
  //     animationType = 'panToSphere';
  //     idleActionCenter.stop();
  //     modelCenter.scale.set(15, 15, 15);
  //     modelCenter.traverse(function (object) {
  //       if (object.isMesh) {
  //         object.visible = true;
  //       }
  //     });
  //     modelLeft.traverse(function (object) {
  //       if (object.isMesh) {
  //         object.visible = true;
  //       }
  //     });
  //     modelRight.traverse(function (object) {
  //       if (object.isMesh) {
  //         object.visible = true;
  //       }
  //     });
  //     transitionInActionLeft.stop();
  //     transitionInActionRight.stop();
  //     slideInActionCenter.stop();
  //     transitionInCenter.stop();
  //     panActions.transit_outAction.stop();
  //     transitionInActionLeft.play();
  //     transitionInActionRight.play();
  //     panActions.transit_outAction.play();
  //     transitionInCenter.play();
  //     setTimeout(() => {
  //       modelPan.traverse(function (object) {
  //         if (object.isMesh) {
  //           // object.visible = false;
  //           object.opacity = 0.5;
  //         }
  //       });
  //     }, 900);
  //   }
  // };
  // initialSphereAnimation = () => {
  //   transitionInActionLeft.play();
  //   transitionInActionRight.play();
  //   slideInActionCenter.play();
  // };

  // setLeftModelAnimation = (model, gltf) => {
  //   let mixerInstance = new THREE.AnimationMixer(model);
  //   transitionInActionLeft = mixerInstance.clipAction(gltf.animations[1]);
  //   transitionInActionLeft.setLoop(THREE.LoopOnce);
  //   transitionOutActionLeft = mixerInstance.clipAction(gltf.animations[2]);
  //   transitionOutActionLeft.setLoop(THREE.LoopOnce);
  //   return mixerInstance;
  // };

  // setRightModelAnimation = (model, gltf) => {
  //   let mixerInstance = new THREE.AnimationMixer(model);
  //   transitionInActionRight = mixerInstance.clipAction(gltf.animations[1]);
  //   transitionInActionRight.setLoop(THREE.LoopOnce);
  //   transitionOutActionRight = mixerInstance.clipAction(gltf.animations[2]);
  //   transitionOutActionRight.setLoop(THREE.LoopOnce);
  //   return mixerInstance;
  // };

  // setCenterModelAnimation = (model, gltf, gltf2) => {
  //   let mixerInstance = new THREE.AnimationMixer(model);
  //   idleActionCenter = mixerInstance.clipAction(gltf2.animations[0]);
  //   transitionInCenter = mixerInstance.clipAction(gltf2.animations[2]);
  //   transitionOutCenter = mixerInstance.clipAction(gltf2.animations[1]);
  //   slideInActionCenter = mixerInstance.clipAction(gltf.animations[2]);
  //   forwardActionCenter = mixerInstance.clipAction(gltf.animations[1]);
  //   slideInActionCenter.setLoop(THREE.LoopOnce);
  //   forwardActionCenter.setLoop(THREE.LoopOnce);
  //   transitionInCenter.setLoop(THREE.LoopOnce);
  //   transitionOutCenter.setLoop(THREE.LoopOnce);
  //   return mixerInstance;
  // };

  // createPanAnimations = (model, gltf) => {
  //   let mixerInstance = new THREE.AnimationMixer(model);
  //   var idleClip = THREE.AnimationClip.findByName(gltf.animations, 'idle');
  //   var signature = THREE.AnimationClip.findByName(gltf.animations, 'signature');
  //   var transit_in = THREE.AnimationClip.findByName(gltf.animations, 'transit_in');
  //   var transit_out = THREE.AnimationClip.findByName(gltf.animations, 'transit_out');
  //   var slide_out_L = THREE.AnimationClip.findByName(gltf.animations, 'slide_out_L');
  //   var slide_in_R = THREE.AnimationClip.findByName(gltf.animations, 'slide_in_R');
  //   if (signature) {
  //     panActions.signatureAction = mixerInstance.clipAction(signature);
  //     panActions.signatureAction.setLoop(THREE.LoopOnce);
  //   }
  //   if (idleClip) {
  //     panActions.idleClipAction = mixerInstance.clipAction(idleClip);
  //   }
  //   if (transit_in) {
  //     panActions.transit_inAction = mixerInstance.clipAction(transit_in);
  //     panActions.transit_inAction.setLoop(THREE.LoopOnce);
  //   }
  //   if (transit_out) {
  //     panActions.transit_outAction = mixerInstance.clipAction(transit_out);
  //     panActions.transit_outAction.setLoop(THREE.LoopOnce);
  //     panActions.transit_outAction.timeScale = 2;
  //   }
  //   if (slide_out_L) {
  //     panActions.slide_out_LAction = mixerInstance.clipAction(slide_out_L);
  //     panActions.slide_out_LAction.setLoop(THREE.LoopOnce);
  //   }
  //   if (slide_in_R) {
  //     panActions.slide_in_RAction = mixerInstance.clipAction(slide_in_R);
  //     panActions.slide_in_RAction.setLoop(THREE.LoopOnce);
  //   }
  //   return mixerInstance;
  // };

  // createPanLight = (scene) => {
  //   // let intensity = this.props.os.indexOf("iOS") !== -1 ? 10 : 10;
  //   var light2 = new THREE.PointLight(0xffffff, 1);
  //   light2.position.set(450, 100, 0);
  //   scene.add(light2);

  //   var light4 = new THREE.PointLight(0xffffff, 1);
  //   light4.position.set(-450, 300, 500);
  //   scene.add(light4);
  //   return scene;
  // };

  // createLight = (scene, color) => {
  //   // let intensity = this.props.os.indexOf('iOS') !== -1 ? 5 : 5;
  //   var lightCenter = new THREE.PointLight(color, 1.5);
  //   lightCenter.position.set(100, 50, 750);
  //   scene.add(lightCenter);

  //   var lightCenter4 = new THREE.PointLight(color, 1.5);
  //   lightCenter4.position.set(100, 10, 150);
  //   scene.add(lightCenter4);
  //   return scene;
  // };

  // createCamera = (position, width, height) => {
  //   let cameraInstance = new THREE.PerspectiveCamera(40, width / height, 0.1, 2000);
  //   cameraInstance.position.set(position.x, position.y, position.z);
  //   return cameraInstance;
  // };

  // loadAllModels = async (isLoadTexture) => {
  //   return new Promise(async (resolve, rej) => {
  //     let promises = [
  //       this.loadGLTFModel(
  //         '/gltf/fold-1/gltf/sphere main back/',
  //         'sphere main back (anim group transit).gltf'
  //       ),
  //       this.loadGLTFModel(
  //         '/gltf/fold-1/gltf/sphere main/',
  //         'sphere main (anim group transit).gltf'
  //       ),
  //       this.loadGLTFModel(
  //         '/gltf/fold-1/gltf/back sphere left/',
  //         'back sphere left (anim group).gltf'
  //       ),
  //       this.loadGLTFModel(
  //         '/gltf/fold-1/gltf/back sphere right/',
  //         'back sphere right (anim group).gltf'
  //       ),
  //       this.loadGLTFModel(
  //         '/gltf/fold-2/pan/animations/gltf/',
  //         'pan (anim group transitions).gltf'
  //       ),
  //     ];
  //     if (isLoadTexture) {
  //       promises.push(this.loadTexture());
  //     }
  //     let responses = await Promise.all(promises);
  //     resolve(responses);
  //   });
  // };

  // async loadTexture(path) {
  //   let th = this;
  //   return new Promise((res, rej) => {
  //     let textureInterval = setInterval(() => {
  //       if (Object.keys(th.props.texture).length > 0) {
  //         clearInterval(textureInterval);
  //         res(th.props.texture);
  //       }
  //     }, 500);
  //   });
  // }

  // async loadGLTFModel(path, fileName) {
  //   return new Promise((res, rej) => {
  //     var loader = new GLTFLoader().setPath(path);
  //     loader.load(
  //       fileName,
  //       function (gltf) {
  //         res(gltf);
  //       },
  //       undefined,
  //       function (e) {
  //         console.error(e);
  //       }
  //     );
  //   });
  // }

  // adjustModel = (model, position, scale, rotation, isVisible, metalness) => {
  //   model.position.set(position.x, position.y, position.z);
  //   model.scale.set(scale.x, scale.y, scale.z);
  //   model.traverse(function (object) {
  //     if (object.isMesh) {
  //       object.visible = isVisible;
  //     }
  //   });
  //   model.rotation.x = rotation.x;
  //   model.rotation.y = rotation.y;
  //   model.rotation.z = rotation.z;
  //   return model;
  // };

  // drawCircle = (radius, position) => {
  //   let geometry = new THREE.CircleGeometry(radius, 32);
  //   let material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
  //   let circle = new THREE.Mesh(geometry, material);
  //   circle.position.set(position.x, position.y, position.z);
  //   circle.material.opacity = 0;
  //   circle.material.transparent = true;
  //   // circle.material.visible = false;
  //   return circle;
  // };





  render() {
    return (
      <div className="slide-section" id={'slide-' + this.props.slideId}>
        <div className="slide-content-wrapper dfltslide slidezero p41 d-flex flex-column">
          <div
            className="slide-object-img-wrapper sphere-model-wrapper dfltss"
            id="sphere"
            onClick={() => this.props.handleSlideChange()}
          ></div>
          <div className="mg-slide-content text-center flex-fill d-flex align-items-md-center align-items-start justify-content-center sphere-content-wrapper">
            <div
              className={
                'mg-slide-info abs-content d-flex flex-column align-items-center justify-content-end ' +
                (this.props.activeSphereTab === 2 ? ' hide-slide-content' : '')
              }
            >
              {/* <h3 className="mg-small-title smoky-effect">
                <i className="fa fa-angle-up"></i> <span>Click me</span>Have an idea?
              </h3> */}
            </div>
            <div
              className={
                'container ' + (this.props.activeSphereTab === 1 ? 'hide-slide-content' : '')
              }
            >
              <div className="mg-slide-info text-left bottom2Slide">
                <h5 className="mg-title-light fw-light"></h5>
                {/* <h1 className={'mg-title ' + (this.props.activeSphereTab === 2 ? 'wavetext' : '')}>
                  {/* {this.props.activeSphereTab === 2 ? ( 
                    <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                      Then Let's cook your idea together!
                    </SplitText>
                  ) : (
                    ''
                  )} */}
                {/* </h1> */}
                {/* <a className="clickBack"> 
                  {/* <i className="fa fa-angle-left"></i> Back 
                </a> */}
                {/* <a className="clickRight" onClick = {() => this.props.discoverSlide()}>
                  Next <i className="fa fa-angle-right"></i>
                </a> */}
                <p className="mg-p xs-hidden"></p>
              </div>
            </div>
          </div>
          {/* <div className="waves"></div> */}
          {/* <div className="mainScreenbottom wave-effect wave-anim">
            <div className="waves-shape shape-one">
              <div className="wave wave-one"></div>
            </div>
            <div className="waves-shape shape-two">
              <div className="wave wave-two "></div>
            </div>
            <div className="waves-shape shape-three">
              <div className="wave wave-three"></div>
            </div>

          </div> */}
        </div>
      </div>
    );
  }
}
