import { Component } from 'react';
import ContactForm from '../ContactForm';
import Footer from '../Footer';
import * as THREE from '../../lib/threejs/build/three.module.js';
import { GLTFLoader } from '../../lib/threejs/jsm/loaders/GLTFLoader.js';
import { getDeviceName } from '../../lib/helper';

let deviceName = getDeviceName();
let orientation = '';

let scene, camera, animationID, idleAnimation, loadingAnimation;
if (window.innerHeight > window.innerWidth) {
  orientation = 'potrait';
} else {
  orientation = 'landscape';
}
export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      scene: "",
      activeTab: 2,
      telephone: {
          id: "telephone",
          path: "/gltf/fold-9/phone/animation/gltf/",
          fileName: "phone (anim group transitions).gltf",
          rotation: { x: 0.20, y: 3.8, z: 0.20 },

          scaling: deviceName === "Desktop" ? { x: 70, y: 70, z: 70 } :
              deviceName === "Mobile" ? orientation === "potrait" ? { x: 50, y: 50, z: 50 } : { x: 55, y: 55, z: 55 } :
                  orientation === "potrait" ? { x: 60, y: 60, z: 60 } : { x: 35, y: 35, z: 35 },

          position: deviceName === "Desktop" ? { x: 6.5, y: 0.6, z: 0 } :
              deviceName === "Mobile" ? orientation === "potrait" ? { x: 5, y: 0, z: 0 } : { x: 6, y: 0.6, z: 0 } :
                  orientation === "potrait" ? { x: 5.7, y: -0.3, z: 0 } : { x: 4.5, y: 6.0, z: 0 },

          signatureScaling: deviceName === "Desktop" ? { x: 60, y: 60, z: 60 } :
              deviceName === "Mobile" ? orientation === "potrait" ? { x: 35, y: 35, z: 35 } : { x: 55, y: 55, z: 55 } :
                  orientation === "potrait" ? { x: 35, y: 35, z: 35 } : { x: 35, y: 35, z: 35 },

          signaturePosition: deviceName === "Desktop" ? { x: 6.5, y: -0.6, z: 0 } :
              deviceName === "Mobile" ? orientation === "potrait" ? { x: 6, y: 1.2, z: 0 } : { x: 6, y: 0.6, z: 0 } :
                  orientation === "potrait" ? { x: 4.5, y: 0.6, z: 0 } : { x: 4.5, y: 0.6, z: 0 },
          circlePosition: deviceName === "Desktop" ? { x: 6.5, y: 1.7, z: 0 } :
              deviceName === "Mobile" ? orientation === "potrait" ? { x: 6, y: 1.2, z: 0 } : { x: 6, y: 0.6, z: 0 } :
                  orientation === "potrait" ? { x: 6, y: 0.9, z: 0 } : { x: 4.5, y: 0.6, z: 0 },
          circleRadius: deviceName === "Desktop" ? 1.8 : deviceName === "Tablet" ? orientation === "potrait" ? 0.55 : 0.7 :
              orientation === "potrait" ? 1.7 : 0.9,
          isBindSignature: true,
      },
      pigeon: {
          id: "pigeon",
          path: "/gltf/fold-10/pigeon/animation/gltf/",
          fileName: "pigeon (anim group transitions).gltf",
          rotation: { x: 0.20, y: 1.9, z: 0.20 },
          scaling: deviceName === "Desktop" ? { x: 4, y: 4, z: 4 } :
              deviceName === "Tablet" ? orientation === "potrait" ? { x: 2.5, y: 2.5, z: 2.5 } : { x: 3, y: 3, z: 3 } :
                  orientation === "potrait" ? { x: 3.5, y: 3.5, z: 3.5 } : { x: 3.5, y: 3.5, z: 3.5 },

          position: deviceName === "Desktop" ? { x: 0.3, y: 1.5, z: 0 } :
              deviceName === "Tablet" ? orientation === "potrait" ? { x: 3.5, y: 1.7, z: 0 } : { x: 2, y: 1.5, z: 0 } :
                  // orientation === "potrait" ? { x: 5.1, y: 1.3, z: 0 } : { x: 5, y: 1.3, z: 0 }
                  window.innerHeight > 667 ? { x: 4.1, y: 1.3, z: 0 } : { x: 4.5, y: 1.3, z: 0 },

          signatureScaling: deviceName === "Desktop" ? { x: 7, y: 7, z: 7 } : deviceName === "Tablet" ? { x: 4, y: 4, z: 4 } : { x: 3.5, y: 3.5, z: 3.5 },
          isPigeon: true,
      },
      idlePigeon: {
          id: "idle-pigeon",
          path: "/gltf/fold-10/pigeon/animation/gltf/",
          fileName: "pigeon (anim group transitions).gltf",
          rotation: { x: 0.10, y: -1.5, z: 0.20 },
          // rotation: { x: 0, y: -2, z: 0 },

          scaling: deviceName === "Desktop" ? { x: 3.3, y: 3.3, z: 3.3 } :
              deviceName === "Tablet" ? orientation === "potrait" ? { x: 2.5, y: 2.5, z: 2.5 } : { x: 3, y: 3, z: 3 } :
                  orientation === "potrait" ? { x: 7, y: 7, z: 7 } : { x: 7, y: 7, z: 7 },

          position: deviceName === "Desktop" ? { x: -1, y: 2, z: 0 } :
              deviceName === "Tablet" ? orientation === "potrait" ? { x: 3.5, y: 1.7, z: 0 } : { x: 2, y: 1.5, z: 0 } :
                  // orientation === "potrait" ? { x: 1, y: 1.5, z: 0 } : { x: 8.2, y: 1.5, z: 0 },
                  window.innerHeight > 667 ? { x: -2, y: 2.5, z: 0 } : { x: -3, y: 2.5, z: 0 },

          signatureScaling: deviceName === "Desktop" ? { x: 7, y: 7, z: 7 } : deviceName === "Tablet" ? { x: 4, y: 4, z: 4 } : { x: 3.5, y: 3.5, z: 3.5 },
      },
    };
  }


    componentDidMount() {
        let elem = document.getElementById('telephone');
        if (elem && this.props.activeSlide === this.props.slideId && !elem.hasChildNodes()) {
            // this.loadModel(this.state.telephone);
        }
    }
    componentDidUpdate(prevProps, prevState) {
        let elem = document.getElementById('telephone');


            {/*   Clearing the canvas when the slide is removed */}
            if(this.props.activeSlide !== this.props.slideId){
              // $('#telephone').empty();

            //  console.log("removed the child nodes of the Digital MArketing");
            }else{
              // console.log("this might be the Digital Marketing Slide");
            }



        if (elem && this.props.activeSlide !== prevProps.activeSlide && this.props.activeSlide === this.props.slideId && !elem.hasChildNodes()) {
            this.setState({
                activeTab: 2
            })
            // this.loadModel(this.state.telephone);
        }
        if (prevProps.activeSlide === this.props.slideId && this.props.activeSlide !== prevProps.activeSlide) {
            this.setState({
                activeTab: 2
            })
        }
    }

    loadModel = async (obj) => {
        let renderer, circleScene, camera, idleAction, signatureAction;
        let mixer, model;
        let mouse = new THREE.Vector2();
        let th = this;
        let container = document.getElementById(obj.id);
        let height = container.clientHeight;
        let width = container.clientWidth;
        let clock = new THREE.Clock();

        renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setPixelRatio(window.devicePixelRatio);
        renderer.setSize(width, height);
        renderer.setClearColor(0xffffff, 0);
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild(renderer.domElement);
        th.state.scene = new THREE.Scene();
        circleScene = new THREE.Scene();

        camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 2000);
        camera.position.set(5, 2, 9);
        let light2 = new THREE.PointLight(0xffffff, 1.3);
        light2.position.set(450, 100, 0);
        th.state.scene.add(light2);


        let light4 = new THREE.PointLight(0xffffff, 1.3);
        light4.position.set(-450, 300, 500);
        th.state.scene.add(light4);

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
        th.state.scene.add(model);
        mixer = new THREE.AnimationMixer(model);

        let loadingAction = mixer.clipAction(gltf.animations[2]);
        idleAction = mixer.clipAction(gltf.animations[0]);
        let  newAction = mixer.clipAction(gltf.animations[1]);
        // This is the loading action
        loadingAction.setLoop(THREE.LoopOnce);
        loadingAction.clampWhenFinished = true;
        loadingAction.play();
        // After the model has been loaded
        idleAction.play();




        if (obj.isBindSignature) {
            let signature = THREE.AnimationClip.findByName(gltf.animations, 'signature');
            let signatureAction = mixer.clipAction(signature);
            signatureAction.setLoop(THREE.LoopOnce);
            let playing = false;
            mixer.addEventListener('finished', function (e) {
                signatureAction.stop();
                model.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
                model.position.set(obj.position.x, obj.position.y, obj.position.z);
                idleAction.play();
            })
            function clicked(event, isClicked) {
              mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
              mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
                raycaster.setFromCamera(mouse, camera);
                let intersects = raycaster.intersectObjects(th.state.scene.children, true);
                if (intersects.length > 0) {
                newAction.stop();
                newAction.play();
                }
            }
            renderer.domElement.addEventListener('mousemove', function (event) {
                let cursor = th._getRelativeMouseXY(event);
                mouse.x = cursor.x;
                mouse.y = cursor.y;
                clicked(event, false);
                camera.updateMatrixWorld();
            });
             // For touch screens
             renderer.domElement.addEventListener('touchstart', function(event){
                console.log("click event for the mobile");
                let cursor = th._getRelativeMouseXY(event);
                mouse.x = cursor.x;
                mouse.y = cursor.y;
                clicked(event, false);
                camera.updateMatrixWorld();
             });
             // For touch screen event ends here
            let deviceName = getDeviceName();
            renderer.domElement.addEventListener('click', function (event) {
              clicked(event, true);
                if (deviceName == 'Mobile') {
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
                        model.position.set(obj.signaturePosition.x, obj.signaturePosition.y, obj.signaturePosition.z);
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
                let delta = clock.getDelta();
                mixer.update(delta);

                if (th.state.activeTab === 3) {
                    model.position.x += 0.02;
                }
                renderer.autoClear = true;
                renderer.render(th.state.scene, camera);
                if (obj.isBindSignature) {
                    renderer.autoClear = false;
                    renderer.render(circleScene, camera);
                }
            }

        }
    }




  handleTabChange = (id) => {
    if (id === 2) {
      this.props.toggleArrows(false);
    }
    this.setState({
      activeTab: id,
    });
  };



    async loadGLTFModel(path, fileName) {
        return new Promise((res, rej) => {
            let loader = new GLTFLoader().setPath(path);
            loader.load(fileName, function (gltf) {
                res(gltf);
            }, undefined, function (e) {
                console.error(e);
            });
        });
    }
    _getRelativeMouseXY = (domEvent) => {
        let th = this;
        let element = domEvent.target || domEvent.srcElement;
        if (element.nodeType === 3) {
            element = element.parentNode; // Safari fix -- see http://www.quirksmode.org/js/events_properties.html
        }
        let elPosition = { x: 0, y: 0 };
        let tmpElement = element;
        let style = getComputedStyle(tmpElement, null);
        elPosition.y += parseInt(style.getPropertyValue("padding-top"), 10);
        elPosition.x += parseInt(style.getPropertyValue("padding-left"), 10);
        do {
            elPosition.x += tmpElement.offsetLeft;
            elPosition.y += tmpElement.offsetTop;
            style = getComputedStyle(tmpElement, null);
            elPosition.x += parseInt(style.getPropertyValue("border-left-width"), 10);
            elPosition.y += parseInt(style.getPropertyValue("border-top-width"), 10);
        } while (tmpElement = tmpElement.offsetParent);

        let elDimension = {
            width: (element === window) ? window.innerWidth : element.offsetWidth,
            height: (element === window) ? window.innerHeight : element.offsetHeight
        };
        return {
            x: +((domEvent.clientX - (elPosition.x + th.props.activeTransofmation)) / elDimension.width) * 2 - 1,
            y: -((domEvent.clientY - elPosition.y) / elDimension.height) * 2 + 1
        };
    };
  render() {
    return (
      <div className="slide-section contact-us-wrapper">
        <div className="slide-content-wrapper ContactMenu p41 d-flex flex-column">
 
          {/* left arrow for mobile  */}

{ this.props.hideArrows 
? ''
: <a  className = "mobile-arrow-div-left" onClick = {this.props.prevSlide}>
 <img src = "images/prev.png" alt = "prev arrow"/> 
 </a>  
  }

      
{/* right arrow for mobile */}

          {/* <div className="waves"></div> */}
          <div className="mainScreenbottom wave-effect wave-anim">
            <div className="waves-shape shape-one">
              <div className="wave wave-one"></div>
            </div>
            <div className="waves-shape shape-two">
              <div className="wave wave-two"></div>
            </div>
            <div className="waves-shape shape-three">
              <div className="wave wave-three"></div>
            </div>
          </div>
          <div className="mg-slide-content text-center flex-fill d-flex align-items-md-center align-items-start">
          <ContactForm
          data={this.props.data}
          handleTabChange={(id) => this.handleTabChange(id)}
          activeTab={this.state.activeTab}
          loadModel = {obj => this.loadModel(obj)}
          idlePigeon={this.state.idlePigeon}
              />


          </div>
      
        </div>
  
         <style>
           {`
             body{
               overflow-y: auto;
             }
           
           `}
         </style>
        <style jsx>
        {
          `
          .slide-content-wrapper{
            min-height:100vh;
            max-height:none;
            height: 100%;
          }
          
          `
        }
    
      </style>
         <Footer></Footer>
      </div>

      
    );
  }
}

const ContactInfo = (props) => {
  return (
    <div className=" d-flex align-items-start container">
      <div className="mg-slide-info text-left contact-us-content">
        <h5 className="mg-title-light fw-light">CONTACT US</h5>
        <h1 className="fw-medium fz-25">+971 4 425 7880</h1>
        <h2 className="fw-medium fz-22 mt-4">info@techbay.co</h2>
        <p className="mg-p mt-4">
          Office 4101, X2 Tower
          <br />
          Cluster X, JLT, Dubai, UAE.
        </p>
        <a href="" className="anchor-link fw-light fz-12 mt-5 d-block"></a>
        <div className="contact-form-submit-btn">
          <button type="button" className="btn theme-btn" onClick={() => props.handleTabChange(2)}>
            SEND A REQUEST
          </button>
        </div>
      </div>
      <div className="slide-object-img-wrapper contact-img-wrapper" id="telephone"></div>
    </div>
  );
};
