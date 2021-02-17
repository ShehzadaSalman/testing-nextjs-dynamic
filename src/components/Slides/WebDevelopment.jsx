import { Component, lazy, Suspense } from 'react';
import { addStickyHeader } from '../../lib/helper';
import * as THREE from '../../lib/threejs/build/three.module.js';
import { GLTFLoader } from '../../lib/threejs/jsm/loaders/GLTFLoader.js';
import { getDeviceName } from '../../lib/helper';
import {useRouter} from 'next/router';
// import WebDevelopmentContent from './WEbDevelopmentContent';
const WebDevelopmentContent = lazy(() => import('./WebDevelopmentContent'));
let deviceName = getDeviceName();

let Webrenderer, circleScene, Webcamera, idleAction, signatureAction,
    idleAction2, signatureAction2, idleAction3, signatureAction3, idleAction4,
    signatureAction4;
let loadingActionWeb, loadingAction2, loadingAction3, loadingAction4;
var mixer, model, mixer2, model2, mixer3, model3, mixer4, model4;
    
let orientation = '';
if (window.innerHeight > window.innerWidth) {
  orientation = 'potrait';
} else {
  orientation = 'landscape';
}

const WebDevelopmentSlide = (props) =>{
  const routers = useRouter()
  const {locale} = routers;
  return <WebDevelopment {...props} language={locale}  />
}



 class WebDevelopment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 1,
      laptop: {
        id: 'laptop',
        url: 'images/slide-6-object-1.png',
        path: '/gltf/fold-5/laptop/animation/gltf/',
        fileName: 'laptop (anim group transitions).gltf',
        className: 'dev-model-1',
        rotation: { x: 0.1, y: 4.65, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 22, y: 22, z: 22 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 17, y: 17, z: 17 }
              : { x: 15, y: 15, z: 15 }
            : window.innerHeight > 667
            ? { x: 21, y: 21, z: 21 }
            : { x: 26, y: 26, z: 26 },

        position:
          deviceName === 'Desktop'
            ? { x: 2.2, y: 2.5, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 4.2, y: 3.2, z: 0 } 
              : { x: 2.7, y: 2.5, z: 0 }
            : window.innerHeight > 667
            ? { x: 4.1, y: 3, z: 0 }
            : { x: 3.8, y: 2.3, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 2.2, y: 2.5, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 3.65, y: 2.3, z: 0 }
              : { x: 2.75, y: 2.4, z: 0 }
            : window.innerHeight > 667
            ? { x: 4.1, y: 3, z: 0 }
            : { x: 3.8, y: 2.3, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.8
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.45
              : 0.65
            : window.innerHeight > 667
            ? 0.8
            : 0.9,

        signaturePosition:
          window.innerHeight > 667 ? { x: 4.4, y: 3, z: 0 } : { x: 3.8, y: 2.3, z: 0 },
        isBindSignature: true,
      },

      settings: {
        id: 'settings',
        url: 'images/slide-6-object-2.png',
        path: '/gltf/fold-5/gears/animation/gltf/',
        fileName: 'settings (anim group transitions).gltf',
        className: 'dev-model-2',
        rotation: { x: 0, y: 4.75, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 22, y: 22, z: 22 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 17, y: 17, z: 17 }
              : { x: 15, y: 15, z: 15 }
            : window.innerHeight > 667
            ? { x: 22, y: 22, z: 22 }
            : { x: 26, y: 26, z: 26 },

        position:
          deviceName === 'Desktop'
            ? { x: 2.2, y: 0, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 4.2, y: 0.7, z: 0 }
              : { x: 2.8, y: 0.5, z: 0 }
            : window.innerHeight > 667
            ? { x: 4.1, y: -0.6, z: 0 }
            : { x: 3.8, y: -0.6, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 2.2, y: 0, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 3.6, y: 0.53, z: 0 }
              : { x: 2.8, y: 0.35, z: 0 }
            : window.innerHeight > 667
            ? { x: 4.1, y: -0.6, z: 0 }
            : { x: 3.8, y: -0.5, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.7
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.4
              : 0.55
            : window.innerHeight > 667
            ? 0.75
            : 0.9,

        signaturePosition:
          window.innerHeight > 667 ? { x: 4.4, y: -0.6, z: 0 } : { x: 3.8, y: -0.6, z: 0 },
        isBindSignature: true,
      },

      globe: {
        id: 'globe',
        url: 'images/slide-6-object-3.png',
        path: '/gltf/fold-5/globe/animation/gltf/',
        fileName: 'globe (anim group transitions).gltf',
        className: 'dev-model-3',
        rotation: { x: 0, y: 4.0, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 23, y: 23, z: 23 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 17, y: 17, z: 17 }
              : { x: 15, y: 15, z: 15 }
            : window.innerHeight > 667
            ? { x: 20, y: 20, z: 20 }
            : { x: 24, y: 24, z: 24 },

        position:
          deviceName === 'Desktop'
            ? { x: 7.5, y: 2.7, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 6, y: 3.4, z: 0 }
              : { x: 7.3, y: 2.7, z: 0 }
            : window.innerHeight > 667
            ? { x: 6, y: 3.2, z: 0 }
            : { x: 6.2, y: 2.6, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 7.55, y: 2.4, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.3, y: 2.3, z: 0 }
              : { x: 7.3, y: 2.35, z: 0 }
            : window.innerHeight > 667
            ? { x: 6, y: 2.9, z: 0 }
            : { x: 6.2, y: 2.3, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.7
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.4
              : 0.5
            : window.innerHeight > 667
            ? 0.65
            : 0.7,
        isBindSignature: true,
      },

      cellphone: {
        id: 'cellphone',
        url: 'images/slide-6-object-4.png',
        path: '/gltf/fold-5/iphone/animation/gltf/',
        fileName: 'iphone (anim group transitions).gltf',
        className: 'dev-model-4',
        rotation: { x: 0, y: 4.5, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 21, y: 21, z: 21 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 16, y: 16, z: 16 }
              : { x: 15, y: 15, z: 15 }
            : window.innerHeight > 667
            ? { x: 21, y: 21, z: 21 }
            : { x: 24, y: 24, z: 24 },

        position:
          deviceName === 'Desktop'
            ? { x: 7.5, y: 0, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 5.8, y: 0.6, z: 0 }
              : { x: 7.3, y: 0.5, z: 0 }
            : window.innerHeight > 667
            ? { x: 6, y: -0.6, z: 0 }
            : { x: 6.2, y: -0.6, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 7.6, y: 0, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.3, y: 0.55, z: 0 }
              : { x: 7.4, y: 0.4, z: 0 }
            : window.innerHeight > 667
            ? { x: 6, y: -0.5, z: 0 }
            : { x: 6.2, y: -0.4, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.7
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.45
              : 0.6
            : window.innerHeight > 667
            ? 0.75
            : 0.9,

            isBindSignature: true,
      },
    };
  }

  componentDidMount() {
    console.log("WEBDEV SLIDE IS MOUNTED"); 
    this.loadModel(this.state.laptop);
}

  shouldComponentUpdate() {
    if(this.props.activeSlide === (this.props.slideId - 1) || this.props.activeSlide === (this.props.slideId + 1) || this.props.activeSlide === this.props.slideId){
      return true;
  }
  else{
      return false;
  }
}


  componentDidUpdate() {
    let elem = document.getElementById('laptop');
   if(this.props.activeSlide === this.props.slideId){
    this.playWedDevAnimation();    
  }
}





playWedDevAnimation = () => {
   console.log("PLAYING THE WEB DEVELOPMENT ANIMATION");

if(loadingActionWeb){
  loadingActionWeb.reset();
  loadingActionWeb.play();

}
if(loadingAction2){
  loadingAction2.reset();
  loadingAction2.play();

}
if(loadingAction3){
  loadingAction3.reset();
  loadingAction3.play();

}
if(loadingAction4){
  loadingAction4.reset();
  loadingAction4.play();
}






}



  
  sceneClear = () => {
    if(this.state.scene != ""){
      while(this.state.scene.children.length > 0){
        // console.log("WEbdevelopment scene is cleaned");
        this.state.scene.remove(this.state.scene.children[0]);
      }
    }
  }




  loadModel = async (obj) => {
    console.log("LOADING THE WEB DEV 3D OBJECTS");
    let mouse = new THREE.Vector2();
    let th = this;
    let container = document.getElementById(obj.id);
    let height = container.clientHeight;
    let width = obj.id === 'idle-pigeon' ? window.innerWidth : container.clientWidth;
    let clock = new THREE.Clock();
    let loading,loading2, loading3, loading4, idle, idle2, idle3, idle4, signature, signature2, signature3, signature4;

    Webrenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    Webrenderer.setPixelRatio(window.devicePixelRatio);
    Webrenderer.setSize(width, height);
    Webrenderer.setClearColor(0xffffff, 0);
    Webrenderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(Webrenderer.domElement);
    th.state.scene = new THREE.Scene();
    circleScene = new THREE.Scene();

    Webcamera = new THREE.PerspectiveCamera(40, width / height, 0.1, 2000);
    Webcamera.position.set(5, 2, 8);
    let light2 = new THREE.PointLight(0xffffff, 2);
    light2.position.set(450, 100, 0);
    th.state.scene.add(light2);

    let light4 = new THREE.PointLight(0xffffff, 2);
    light4.position.set(-450, 300, 500);
    th.state.scene.add(light4);

    let raycaster = new THREE.Raycaster();


    // loading the laptop model into the scene
    let gltf = await th.loadGLTFModel(this.state.laptop.path, this.state.laptop.fileName);
    model = gltf.scene;
    model.name = "wdOne";
    model.position.set(this.state.laptop.position.x, this.state.laptop.position.y, this.state.laptop.position.z);
    model.scale.set(this.state.laptop.scaling.x, this.state.laptop.scaling.y, this.state.laptop.scaling.z);
    model.rotation.x += this.state.laptop.rotation.x;
    model.rotation.y += this.state.laptop.rotation.y;
    model.rotation.z += this.state.laptop.rotation.z;
    this.state.scene.add(model);
    mixer = new THREE.AnimationMixer(model);
    idleAction = mixer.clipAction(gltf.animations[0]);
    loadingActionWeb = mixer.clipAction(gltf.animations[2]);
    loadingActionWeb.setLoop(THREE.LoopOnce);
    loadingActionWeb.clampWhenFinished = true;
    loadingActionWeb.play();
    idleAction.play();
    signature = THREE.AnimationClip.findByName(gltf.animations, 'signature');
    signatureAction = mixer.clipAction(signature);
    signatureAction.setLoop(THREE.LoopOnce);

  // loading the setting icons there

  let gltf2 = await th.loadGLTFModel(this.state.settings.path, this.state.settings.fileName);
  model2 = gltf2.scene;
  model2.name = "wdTwo";
  model2.position.set(this.state.settings.position.x, this.state.settings.position.y, this.state.settings.position.z);
  model2.scale.set(this.state.settings.scaling.x, this.state.settings.scaling.y, this.state.settings.scaling.z);
  model2.rotation.x += this.state.settings.rotation.x;
  model2.rotation.y += this.state.settings.rotation.y;
  model2.rotation.z += this.state.settings.rotation.z;
  this.state.scene.add(model2);
  mixer2 = new THREE.AnimationMixer(model2);
  idleAction2 = mixer2.clipAction(gltf2.animations[0]);
  loadingAction2 = mixer2.clipAction(gltf2.animations[2]);
  loadingAction2.setLoop(THREE.LoopOnce);
  loadingAction2.clampWhenFinished = true;
  loadingAction2.play();
  idleAction2.play();
  signature2 = THREE.AnimationClip.findByName(gltf2.animations, 'signature');
  signatureAction2 = mixer2.clipAction(signature2);
  signatureAction2.setLoop(THREE.LoopOnce);


// loading the globe model into the Scene
let gltf3 = await th.loadGLTFModel(this.state.globe.path, this.state.globe.fileName);
model3 = gltf3.scene;
model3.name = "wdThree";
model3.position.set(this.state.globe.position.x, this.state.globe.position.y, this.state.globe.position.z);
model3.scale.set(this.state.globe.scaling.x, this.state.globe.scaling.y, this.state.globe.scaling.z);
model3.rotation.x += this.state.globe.rotation.x;
model3.rotation.y += this.state.globe.rotation.y;
model3.rotation.z += this.state.globe.rotation.z;
th.state.scene.add(model3);
mixer3 = new THREE.AnimationMixer(model3);
idleAction3 = mixer3.clipAction(gltf3.animations[0]);
loadingAction3 = mixer3.clipAction(gltf3.animations[2]);
loadingAction3.setLoop(THREE.LoopOnce);
loadingAction3.clampWhenFinished = true;
loadingAction3.play();
idleAction3.play();
signature3 = THREE.AnimationClip.findByName(gltf3.animations, 'signature');
signatureAction3 = mixer3.clipAction(signature3);
signatureAction3.setLoop(THREE.LoopOnce);

// adding cellphone model to the scene
let gltf4 = await th.loadGLTFModel(this.state.cellphone.path, this.state.cellphone.fileName);
model4 = gltf4.scene;
model4.name = "wdFour";
model4.position.set(this.state.cellphone.position.x, this.state.cellphone.position.y, this.state.cellphone.position.z);
model4.scale.set(this.state.cellphone.scaling.x, this.state.cellphone.scaling.y, this.state.cellphone.scaling.z);
model4.rotation.x += this.state.cellphone.rotation.x;
model4.rotation.y += this.state.cellphone.rotation.y;
model4.rotation.z += this.state.cellphone.rotation.z;
th.state.scene.add(model4);
mixer4 = new THREE.AnimationMixer(model4);
idleAction4 = mixer4.clipAction(gltf4.animations[0]);
loadingAction4 = mixer4.clipAction(gltf4.animations[2]);
loadingAction4.setLoop(THREE.LoopOnce);
loadingAction4.clampWhenFinished = true;
loadingAction4.play();
idleAction4.play();
signature4 = THREE.AnimationClip.findByName(gltf4.animations, 'signature');
signatureAction4 = mixer4.clipAction(signature4);
signatureAction4.setLoop(THREE.LoopOnce);

    if (obj.isBindSignature) {
      let playing = false;
      mixer.addEventListener('finished', function (e) {
        signatureAction.stop();
        idleAction.play();
      });

      mixer2.addEventListener('finished', function (e) {
        signatureAction2.stop();
        idleAction2.play();
      });

      mixer3.addEventListener('finished', function (e) {      
        signatureAction3.stop();
        idleAction3.play();
      });

      mixer4.addEventListener('finished', function (e) {
        signatureAction4.stop();
        idleAction4.play();
      });






      function clicked(event, isClicked) {
        mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          raycaster.setFromCamera(mouse, Webcamera);
          let intersects = raycaster.intersectObjects(th.state.scene.children, true);
          if (intersects.length > 0) {

       

          if(intersects[0].object.parent.name == "laptop_group3"){

     
        if(isClicked){
          signatureAction.stop();
        }
        signatureAction2.stop();
        signatureAction3.stop();
        signatureAction4.stop();
        signatureAction.play();
        }
          else if (intersects[0].object.parent.name == "globe_group2"){
            signatureAction.stop();
            signatureAction2.stop();
            if(isClicked){
              signatureAction3.stop();
            }
            signatureAction4.stop();
            signatureAction3.play();


          }
          else if(intersects[0].object.parent.name == "gear_high_group3"){
            signatureAction.stop();
            if(isClicked){
              signatureAction2.stop();
            }
            signatureAction3.stop();
            signatureAction4.stop();
            signatureAction2.play();
          }
          else if(intersects[0].object.parent.name == "phone_group2"){
            if(isClicked){
              signatureAction4.stop();
            }
            signatureAction.stop();
            signatureAction2.stop();
            signatureAction3.stop();
            signatureAction4.play();
          }




          } else {



          }
      }
      document.addEventListener('mousemove', function (event) {
        clicked(event, false);
        Webcamera.updateMatrixWorld();
      });
      let deviceName = getDeviceName();
      document.addEventListener('click', function (event) {
        if (deviceName === 'Mobile') {
          clicked(event, true);
          Webcamera.updateMatrixWorld();
        }else {
          clicked(event, true);
          Webcamera.updateMatrixWorld();
        }
      });
    }
    animate();
    window.onresize = function () {
      height = container.clientHeight;
      width = container.clientWidth;
      Webcamera.aspect = width / height;
      Webcamera.updateProjectionMatrix();

      Webrenderer.setSize(width, height);
    };
    function animate() {
      requestAnimationFrame(animate);
      var delta = clock.getDelta();
      if (th.props.activeSlide === th.props.slideId) {
        mixer.update(delta);
        mixer2.update(delta);
        mixer3.update(delta);
        mixer4.update(delta);
        if (th.state.activeTab === 3) {
          model.position.x += 0.02;
        }
        Webrenderer.autoClear = true;
        Webrenderer.render(th.state.scene, Webcamera);

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
    let geometry = new THREE.CircleGeometry(radius, 32);
    let material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    let circle = new THREE.Mesh(geometry, material);
    circle.position.set(position.x, position.y, position.z);
    circle.material.opacity = 0;
    circle.material.transparent = true;
    return circle;
  };



  formpopupsubmit = () => {
  console.log("the formpopup form has been submitted");
  }


  formpopup = () => {
    $('.formPopup ').css("display","block");
    console.log("popup form should come here");
  }
  scrolldownmethod(targetdiv){
    var targetid = '#' + targetdiv;
    $(targetid)[0].scrollIntoView({
    behavior: 'smooth'
      });
  }
  // method to remove the left right arrow on scrolling
  removeSliderArrow = (element) => {
    let winheight = window.innerHeight; // get the height of the inner window
    let scrolledtop = element.target.scrollTop; // get the scrolled height of the element from the top;
  if(scrolledtop > winheight){ // compare if the scrolled of the element top distance is greater than the windhow height
    $('.slider-custom-arrow.next, .slider-custom-arrow.prev').css("display", "none");
   
   if(this.props.nextSlide){
    element.target.querySelector(".mobile-arrow-div-left img").style.display = 'none'; 
    element.target.querySelector(".mobile-arrow-div-right img").style.display = 'none'; 
   }
   
    }
    else{
        $('.slider-custom-arrow.next, .slider-custom-arrow.prev').css("display", "block");
      if(this.props.prevSlide){
        element.target.querySelector(".mobile-arrow-div-left img").style.display = 'block'; 
        element.target.querySelector(".mobile-arrow-div-right img").style.display = 'block'; 
      }
        
    }
  }

  render() {
    return (
      <div onScroll = {this.removeSliderArrow} className=" slide-section toggleDetails scroll-down-trigger">
        <div
          className="contentSlideSection slide-content-wrapper p41 d-flex flex-column slidethree"
          id="content-wrapper3"
          onScroll={(event) => addStickyHeader(event.target)}
        >


{ this.props.prevSlide 
? <a  className = "mobile-arrow-div-left" onClick = {this.props.prevSlide}>
<img src = "/images/prev.png" alt = "prev arrow" /> 
</a>
 : ''
 }

      
{/* right arrow for mobile */}
{this.props.nextSlide 
?<a   className = "mobile-arrow-div-right" onClick = {this.props.nextSlide}>
<img src = "/images/next.png" alt = "next arrow" />
</a>
: ''
}



          <div className="mg-slide-content text-center flex-fill d-flex align-items-start align-items-md-center">
            <div className="container dt_container" id="container3">
              {/* <div className="waves"></div> */}
              <div className="mg-slide-info text-left m-auto" id="info3">
                <div className="showdetail">
                  <h5 className="mg-title-light fw-light">
                    {this.props.language === 'en-US'
                     ?<>{this.props.data.sliders[0].short_title}</>
                     :<>{this.props.data.sliders[0].short_title_arabic}</>
                    }
                  </h5>
                  <h1 className="mg-title">
                    {this.props.language === 'en-US'
                     ?<>{this.props.data.sliders[0].title}</>
                     :<>{this.props.data.sliders[0].title_arabic}</>
                    }
                    </h1>
                  <p className="mg-p truncate-height mb-hide-description">
                  {this.props.language === 'en-US'
                  ?<>{this.props.data.sliders[0].description}</>
                  :<>{this.props.data.sliders[0].description_arabic}</>
                  }
                  </p>
                 
                  <button onClick = {() => this.scrolldownmethod('wd-targetdiv')} className="btn theme-btn xs-hidden">
                    <img src="/images/scrollDown.png" alt = "scroll up" /> 
                     {this.props.language === 'en-US'
                      ? <>SCROLL UP</>
                      :<>انتقل إلى أعلى</>
                        }
              
                  </button>
                </div>
              </div>
             <Suspense fallback = "Loading...">
            <WebDevelopmentContent 
                data = {this.props.data.sliders[0]}
                services = {this.props.data.services}
                books = {this.props.data.books}
            />  
            </Suspense> 
            
            </div>
          </div>
        </div>
        <div className="slide-object-img-wrapper contact-img-wrapper" id="laptop"></div>
      </div>
    );
  }
}

export default React.memo(WebDevelopmentSlide);