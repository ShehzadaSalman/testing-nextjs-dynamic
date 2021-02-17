import { Component } from 'react';
import * as THREE from '../../lib/threejs/build/three.module.js';
import { GLTFLoader } from '../../lib/threejs/jsm/loaders/GLTFLoader.js';
import { getDeviceName } from '../../lib/helper';

let deviceName = getDeviceName();
let orientation = '';

if (window.innerHeight > window.innerWidth) {
  orientation = 'potrait';
} else {
  orientation = 'landscape';
}
export default class Discover extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ship: {
        id: 'ship',
        url: 'images/slide-4-object-1.png',
        path: '/gltf/fold-3/ship/animation/gltf/',
        fileName: 'ship (anim group transitions).gltf',
        className: 'dis-model-1',
        rotation: { x: 0.2, y: 3, z: 0 },
        // to managing the size
        scaling:
          deviceName === 'Desktop'
            ? { x: 12, y: 12, z: 12 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 7, y: 7, z: 7 }
              : { x: 10, y: 10, z: 10 }
            : window.innerHeight > 667
            ? { x: 11, y: 11, z: 11 }
            : { x: 13, y: 13, z: 13 },

        // to manage the position
        position:
          deviceName === 'Desktop'
            ? { x: 2.3, y: 3, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 3.5, y: 2.3, z: 0 }
              : { x: 2.6, y: 2.3, z: 0 }
            : window.innerHeight > 667
            ? { x: 4, y: 2.7, z: 0 }
            : { x: 3.5, y: 2.4, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 5.4, y: 2.5, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 3.5, y: 2.15, z: 0 }
              : { x: 2.7, y: 2.3, z: 0 }
            : window.innerHeight > 667
            ? { x: 4.1, y: 2.7, z: 0 }
            : { x: 3.6, y: 2.5, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.9
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.55
              : 0.7
            : window.innerHeight > 667
            ? 0.7
            : 0.8,
      },
      car: {
        id: 'car',
        url: 'images/slide-4-object-2.png',
        path: '/gltf/fold-3/car/animations/gltf/',
        fileName: 'car (anim group transitions).gltf',
        className: 'dis-model-2',
        rotation: { x: 0, y: -1.7, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 10, y: 10, z: 10 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6, y: 6, z: 6 }
              : { x: 8, y: 8, z: 8 }
            : window.innerHeight > 667
            ? { x: 10, y: 10, z: 10 }
            : { x: 13, y: 13, z: 13 },

        position:
          deviceName === 'Desktop'
            ? { x: 2.2, y: 0.5, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 3.5, y: 1, z: 0 }
              : { x: 2.6, y: 0.5, z: 0 }
            : window.innerHeight > 667
            ? { x: 4.1, y: -0.3, z: 0 }
            : { x: 3.6, y: -0.4, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 2.15, y: 0.1, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 3.5, y: 0.6, z: 0 }
              : { x: 2.6, y: 0.15, z: 0 }
            : window.innerHeight > 667
            ? { x: 4.1, y: -0.5, z: 0 }
            : { x: 3.6, y: -0.6, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.65
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.4
              : 0.55
            : window.innerHeight > 667
            ? 0.6
            : 0.7,
      },
      plane: {
        id: 'plane',
        url: 'images/slide-4-object-3.png',
        path: '/gltf/fold-3/plane/animation/gltf/',
        fileName: 'plane (anim group transitions).gltf',
        className: 'dis-model-3',
        rotation: { x: 0.5, y: 4.5, z: 0.1 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 10, y: 10, z: 10 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6, y: 6, z: 6 }
              : { x: 7.5, y: 7.5, z: 7.5 }
            : window.innerHeight > 667
            ? { x: 9, y: 9, z: 9 }
            : { x: 12, y: 12, z: 12 },

        position:
          deviceName === 'Desktop'
            ? { x: 7.8, y: 2.4, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.4, y: 2.4, z: 0 }
              : { x: 7.3, y: 2.4, z: 0 }
            : window.innerHeight > 667
            ? { x: 5.5, y: 2.8, z: 0 }
            : { x: 5.8, y: 2.5, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 8, y: 2.2, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.5, y: 2, z: 0 }
              : { x: 7.3, y: 2.1, z: 0 }
            : window.innerHeight > 667
            ? { x: 5.6, y: 2.4, z: 0 }
            : { x: 6, y: 2.3, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.8
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.6
              : 0.7
            : window.innerHeight > 667
            ? 0.7
            : 0.9,
      },
      flying: {
        id: 'flying',
        url: 'images/slide-4-object-4.png',
        path: '/gltf/fold-3/stickman flying/animations/gltf/',
        fileName: 'flying man (anim group transitions).gltf', //"flying man (anim group).glb",
        className: 'dis-model-4',
        rotation: { x: 0, y: 4, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 11, y: 11, z: 11 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.5, y: 6.5, z: 6.5 }
              : { x: 9.5, y: 9.5, z: 9.5 }
            : window.innerHeight > 667
            ? { x: 11, y: 11, z: 11 }
            : { x: 15, y: 15, z: 15 },

        position:
          deviceName === 'Desktop'
            ? { x: 7.9, y: 0.5, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.4, y: 1, z: 0 }
              : { x: 7.2, y: 0.6, z: 0 }
            : window.innerHeight > 667
            ? { x: 5.8, y: -0.3, z: 0 }
            : { x: 6, y: -0.4, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 7.9, y: 0.3, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.5, y: 0.7, z: 0 }
              : { x: 7.3, y: 0.3, z: 0 }
            : window.innerHeight > 667
            ? { x: 5.8, y: -0.6, z: 0 }
            : { x: 6, y: -0.6, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.6
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.5
              : 0.6
            : window.innerHeight > 667
            ? 0.6
            : 0.7,
      },
    };
  }

  componentDidMount() {
    let elem = document.getElementById('ship');
    if (elem && this.props.activeSlide === this.props.slideId && !elem.hasChildNodes()) {
      this.loadModel(this.state.ship);
      // this.loadModel(this.state.car);
      // this.loadModel(this.state.plane);
      // this.loadModel(this.state.flying);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    let elem = document.getElementById('ship');
    if (elem && this.props.activeSlide === this.props.slideId && !elem.hasChildNodes()) {
      this.loadModel(this.state.ship);
      // this.loadModel(this.state.car);
      // this.loadModel(this.state.plane);
      // this.loadModel(this.state.flying);
    }
  }
  loadModel = async (obj) => {
    let renderer, scene, circleScene, camera, idleAction, signatureAction;
    let mixer, model;
    let mouse = new THREE.Vector2();
    let th = this;
    let container = document.getElementById(obj.id);
    let height = container.clientHeight;
    let width = obj.id === 'idle-pigeon' ? window.innerWidth : container.clientWidth;
    let clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(width, height);
    renderer.setClearColor(0xffffff, 0);
    renderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(renderer.domElement);
    scene = new THREE.Scene();
    circleScene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 2000);
    camera.position.set(5, 2, 8);
    let light2 = new THREE.PointLight(0xffffff, 2);
    light2.position.set(450, 100, 0);
    scene.add(light2);

    let light4 = new THREE.PointLight(0xffffff, 2);
    light4.position.set(-450, 300, 500);
    scene.add(light4);

    let raycaster = new THREE.Raycaster();
    let gltf = await th.loadGLTFModel(obj.path, obj.fileName);
    model = gltf.scene;
    model.position.set(obj.position.x, obj.position.y, obj.position.z);
    model.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
    let mesh;
    model.traverse(function (object) {
      if (object.isMesh) {
        object.castShadow = true;
        mesh = object;
      }
    });
    model.rotation.x += obj.rotation.x;
    model.rotation.y += obj.rotation.y;
    model.rotation.z += obj.rotation.z;
    scene.add(model);

    mixer = new THREE.AnimationMixer(model);
    if (obj.isPigeon) {
      idleAction = mixer.clipAction(gltf.animations[0]);
    } else {
      idleAction = mixer.clipAction(gltf.animations[0]);
    }
    idleAction.play();
    if (obj.isBindSignature) {
      circleScene.add(
        this.drawCircle(obj.circleRadius, {
          x: obj.circlePosition.x,
          y: obj.circlePosition.y,
          z: obj.circlePosition.z,
        })
      );
      var signature = THREE.AnimationClip.findByName(gltf.animations, 'signature');
      signatureAction = mixer.clipAction(signature);
      signatureAction.setLoop(THREE.LoopOnce);
      let playing = false;
      mixer.addEventListener('finished', function (e) {
        // playing = false;
        signatureAction.stop();
        model.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
        model.position.set(obj.position.x, obj.position.y, obj.position.z);
        idleAction.play();
      });

      // Documented till here

      function clicked(event, isClicked) {
        raycaster.setFromCamera(mouse, camera);
        var intersects = raycaster.intersectObject(circleScene.children[0], true);
        if (intersects.length > 0) {
          if (!playing || deviceName === 'Mobile') {
            playing = true;
            idleAction.stop();
            if (isClicked) {
              signatureAction.stop();
              model.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
              model.position.set(obj.position.x, obj.position.y, obj.position.z);
              idleAction.play();
            }
            if (deviceName !== 'Mobile') {
              model.scale.set(
                obj.signatureScaling.x,
                obj.signatureScaling.y,
                obj.signatureScaling.z
              );
              model.position.set(
                obj.signaturePosition.x,
                obj.signaturePosition.y,
                obj.signaturePosition.z
              );
            }
            signatureAction.stop();
            signatureAction.play();
          }
        } else {
          if (playing) {
            playing = false;
            signatureAction.stop();
            model.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
            model.position.set(obj.position.x, obj.position.y, obj.position.z);
            idleAction.play();
          }
        }
      }
      renderer.domElement.addEventListener('mousemove', function (event) {
        let cursor = th._getRelativeMouseXY(event);
        mouse.x = cursor.x;
        mouse.y = cursor.y;
        clicked(event, false);
        camera.updateMatrixWorld();
      });
      let deviceName = getDeviceName();
      renderer.domElement.addEventListener('click', function (event) {
        if (deviceName === 'Mobile') {
          let cursor = th._getRelativeMouseXY(event);
          mouse.x = cursor.x;
          mouse.y = cursor.y;
          clicked(event, true);
          camera.updateMatrixWorld();
        } else if (playing) {
          idleAction.stop();
          signatureAction.stop();
          if (deviceName !== 'Mobile') {
            model.scale.set(obj.signatureScaling.x, obj.signatureScaling.y, obj.signatureScaling.z);
            model.position.set(
              obj.signaturePosition.x,
              obj.signaturePosition.y,
              obj.signaturePosition.z
            );
          }
          signatureAction.play();
        }
      });
    }
    animate();
    window.onresize = function () {
      height = container.clientHeight;
      width = container.clientWidth;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);
    };
    function animate() {
      requestAnimationFrame(animate);
      if (th.props.activeSlide === th.props.slideId) {
        var delta = clock.getDelta();
        mixer.update(delta);

        if (th.state.activeTab === 3) {
          model.position.x += 0.02;
        }
        renderer.autoClear = true;
        renderer.render(scene, camera);
        if (obj.isBindSignature) {
          renderer.autoClear = false;
          renderer.render(circleScene, camera);
        }
      }
    }
  };

  async loadGLTFModel(path, fileName) {
    return new Promise((res, rej) => {
      var loader = new GLTFLoader().setPath(path);
      loader.load(
        fileName,
        function (gltf) {
          res(gltf);
        },
        undefined,
        function (e) {
          console.error(e);
        }
      );
    });
  }
  drawCircle = (radius, position) => {
    var geometry = new THREE.CircleGeometry(radius, 32);
    var material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    var circle = new THREE.Mesh(geometry, material);
    circle.position.set(position.x, position.y, position.z);
    circle.material.opacity = 0;
    circle.material.transparent = true;
    return circle;
  };

  _getRelativeMouseXY = (domEvent) => {
    var th = this;
    var element = domEvent.target || domEvent.srcElement;
    if (element.nodeType === 2) {
      element = element.parentNode; // Safari fix -- see http://www.quirksmode.org/js/events_properties.html
    }
    //get the real position of an element relative to the page starting point (0, 0)
    //credits go to brainjam on answering http://stackoverflow.com/questions/5755312/getting-mouse-position-relative-to-content-area-of-an-element
    var elPosition = { x: 0, y: 0 };
    var tmpElement = element;
    //store padding
    var style = getComputedStyle(tmpElement, null);
    elPosition.y += parseInt(style.getPropertyValue('padding-top'), 10);
    elPosition.x += parseInt(style.getPropertyValue('padding-left'), 10);
    //add positions
    do {
      elPosition.x += tmpElement.offsetLeft;
      elPosition.y += tmpElement.offsetTop;
      style = getComputedStyle(tmpElement, null);
      elPosition.x += parseInt(style.getPropertyValue('border-left-width'), 10);
      elPosition.y += parseInt(style.getPropertyValue('border-top-width'), 10);
    } while ((tmpElement = tmpElement.offsetParent));

    var elDimension = {
      width: element === window ? window.innerWidth : element.offsetWidth,
      height: element === window ? window.innerHeight : element.offsetHeight,
    };
    return {
      x:
        +((domEvent.clientX - (elPosition.x + th.props.activeTransofmation)) / elDimension.width) *
          2 -
        1,
      y: -((domEvent.clientY - elPosition.y) / elDimension.height) * 2 + 1,
    };
  };
  render() {
    return (
      <div className=" slide-section toggleDetails scroll-down-trigger">
        <div
          className="contentSlideSection slide-content-wrapper p41 d-flex flex-column slidefirst"
          id="content-wrapper1"
        >
          <div className="mg-slide-content text-center flex-fill d-flex align-items-start align-items-md-center">
            <div className="container dt_container" id="container1">
              <div className="waves"></div>
              <div className="mainScreenbottom wave-effect wave-anim">
                <div className="waves-shape shape-three">
                  <div className="wave wave-three"></div>
                </div>
              </div>

              <div className="mg-slide-info text-left m-auto" id="info">
                <div className="showdetail">
                  <h5 className="mg-title-light fw-light"></h5>
                  <h1 className="mg-title">But first, let's discover our services</h1>
                  <p className="mg-p truncate-height mb-hide-description">
                    A 2 minutes introduction video will tell you much about us, but you would still
                    want to keep sliding to see the good stuff!
                  </p>
                  <img className="playIcon" src="/images/white-play-icon.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="slide-object-img-wrapper contact-img-wrapper" id="ship"></div>
        {/* <div className="slide-object-img-wrapper contact-img-wrapper" id="car"></div> */}
        <div className="slide-object-img-wrapper contact-img-wrapper" id="plane"></div> 
       <div className="slide-object-img-wrapper contact-img-wrapper" id="flying"></div> 
      </div>
    );
  }
}
/// BACKUP FOR  THE SATE OF 5TH SEPTEMBEER 2020
// CUBE GEOMETRY

    // var cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    // var cubeMaterial = new THREE.MeshLambertMaterial({ color: 0x999999, wireframe: false });
    // var object = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // object.position.set(0, 0, 0);
    // scene.add(object);
    // Adding and calling a 3d object here


    // OLD LIGHTING
      // var light = new THREE.DirectionalLight(0xffffff, 0.5);

    // light.position.set(-6, 12, 0).normalize();
    // scene.add(light);
    // let light2 = new THREE.PointLight(0xffffff, 2);
    // light2.position.set(450, 100, 0);
    // scene.add(light2);