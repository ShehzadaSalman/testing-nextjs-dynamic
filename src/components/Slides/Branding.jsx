import { Component, lazy, Suspense } from 'react';
import { addStickyHeader } from '../../lib/helper';
import * as THREE from '../../lib/threejs/build/three.module.js';
import { GLTFLoader } from '../../lib/threejs/jsm/loaders/GLTFLoader.js';
import { getDeviceName } from '../../lib/helper';// for smooth scrolling
import { useRouter } from 'next/router';
import $ from 'jquery'
const BrandingContent = lazy(() => import('./BrandingContent'));


let deviceName = getDeviceName();
let orientation = '';
var brandRenderer, brandScene, circleScene, brandCamera, idleAction,
 signatureAction,
idleAction2, signatureAction2, idleAction3, signatureAction3,
 idleAction4,
signatureAction4;
var mixer, model, mixer2, model2, mixer3, model3, mixer4, model4;
var loadingAction, loadingAction2, loadingAction3, loadingAction4;
if (window.innerHeight > window.innerWidth) {
  orientation = 'potrait';
} else {
  orientation = 'landscape';
}

const BrandingSlide = (props) =>{
  const routers = useRouter()
  const {locale} = routers;
  console.info({props});
  return <Branding {...props} language={locale}  />
}




 class Branding extends Component {
  constructor() {
    super();
    this.state = {
      activeTab: 1,
      testingobject: {
        id: 'testingobject',
        url: 'images/slide-5-object-1.png',
        path: '/gltf/fold-4/radio/animation/gltf/',
        fileName: 'jukebox (anim group transitions).gltf',
        className: 'digi-model-1',
        rotation: { x: 0, y: 4.8, z: 0 },
        scaling:
        deviceName === 'Desktop'
          ? { x: 15, y: 15, z: 15 }
          : deviceName === 'Mobile'
          ? orientation === 'potrait'
            ? { x: 11.5, y: 11.5, z: 11.5 }
            : { x: 15, y: 15, z: 15 }
          : window.innerHeight > 667
          ? { x: 13, y: 13, z: 13 }
          : { x: 16, y: 16, z: 16 },

        position:
        deviceName === 'Desktop'
          ? { x: 2, y: 2.3, z: 0 }
          : deviceName === 'Mobile'
          ? orientation === 'potrait'
              ? { x: 4.2, y: 3.1, z: 0 }
              : { x: 2.6, y: 2.3, z: 0 }
          : window.innerHeight > 667
              ? { x: 3.2, y: 3.2, z: 0 }
              : { x: 3.8, y: 2.4, z: 0 },

              circlePosition:
                deviceName === 'Desktop'
                  ? { x: 2.1, y: 2.4, z: 0 }
                  : deviceName === 'Tablet'
                  ? orientation === 'potrait'
                    ? { x: 3.6, y: 2.15, z: 0 }
                    : { x: 2.7, y: 2.25, z: 0 }
                  : window.innerHeight > 667
                  ? { x: 4.1, y: 3.2, z: 0 }
                  : { x: 3.8, y: 2.7, z: 0 },

              circleRadius:
                deviceName === 'Desktop'
                  ? 0.8
                  : deviceName === 'Tablet'
                  ? orientation === 'potrait'
                    ? 0.45
                    : 0.6
                  : window.innerHeight > 667
                  ? 0.75
                  : 0.85,
              isBindSignature: true,
         },
      phone: {
        id: 'phone',
        url: 'images/slide-5-object-1.png',
        path: '/gltf/fold-4/radio/animation/gltf/',
        fileName: 'jukebox (anim group transitions).gltf',
        className: 'brand-model-1',
        rotation: { x: 0.1, y: 5, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 15, y: 15, z: 15 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 20, y: 20, z: 20 }
              : { x: 15, y: 15, z: 15 }
            : window.innerHeight > 667
            ? { x: 13, y: 13, z: 13 }
            : { x: 16, y: 16, z: 16 },

        position:
          deviceName === 'Desktop'
            ? { x: 2, y: 2.3, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
                ? { x: 0, y: 0, z: 0 }
                : { x: 0, y: 0, z: 0 }
            : window.innerHeight > 667
                ? { x: 3.2, y: 3.2, z: 0 }
                : { x: 3.8, y: 2.4, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 2.1, y: 2.4, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 3.6, y: 2.15, z: 0 }
              : { x: 2.7, y: 2.25, z: 0 }
            : window.innerHeight > 667
            ? { x: 4.1, y: 3.2, z: 0 }
            : { x: 3.8, y: 2.7, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.8
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.45
              : 0.6
            : window.innerHeight > 667
            ? 0.75
            : 0.85,
        isBindSignature: true,
      },

      phone1: { // mike
        id: 'phone1',
        url: 'images/slide-5-object-2.png',
        path: '/gltf/fold-4/mic/animations/gltf/',
        fileName: 'mic (anim group transitions).gltf',
        className: 'brand-model-2',
        rotation: { x: 0.1, y: 4.6, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 16, y: 16, z: 16 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 14, y: 14, z: 14 }
              : { x: 10, y: 10, z: 10 }
            : window.innerHeight > 667
            ? { x: 18, y: 18, z: 18 }
            : { x: 21, y: 21, z: 21 },

        position:
          deviceName === 'Desktop'
            ? { x: 2.2, y: 0, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 4.1, y: 0.5, z: 0 }
              : { x: 2.8, y: 0.5, z: 0 }
            : window.innerHeight > 667
            ? { x: 4.2, y: -0.7, z: 0 }
            : { x: 4.2, y: -0.6, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 2.1, y: 0.1, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 3.65, y: 0.7, z: 0 }
              : { x: 2.7, y: 0.4, z: 0 }
            : window.innerHeight > 667
            ? { x: 3.9, y: -0.5, z: 0 }
            : { x: 3.8, y: -0.4, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.7
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.4
              : 0.5
            : window.innerHeight > 667
            ? 0.75
            : 0.8,

        signaturePosition:
          window.innerHeight > 667 ? { x: 3.9, y: 0, z: 0 } : { x: 3.8, y: 0, z: 0 },
        isBindSignature: true,
      },
      phone2: { // Bulb
        id: 'phone2',
        url: 'images/slide-5-object-3.png',
        path: '/gltf/fold-4/bulb/animations/gltf/',
        fileName: 'bulb (anim group transitions).gltf',
        className: 'brand-model-3',
        rotation: { x: 0.5, y: 5.0, z: 0.1 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 20, y: 20, z: 20 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 16, y: 16, z: 16 }
              : { x: 15, y: 15, z: 15 }
            : window.innerHeight > 667
            ? { x: 18, y: 18, z: 18 }
            : { x: 21, y: 21, z: 21 },

        position:
          deviceName === 'Desktop'
            ? { x: 8, y: 2.3, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 6, y: 3.2, z: 0 }
              : { x: 7.4, y: 2.3, z: 0 }
            : window.innerHeight > 667
            ? { x: 6.1, y: 3.2, z: 0 }
            : { x: 6.4, y: 2.6, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 7.9, y: 2.3, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.4, y: 2.1, z: 0 }
              : { x: 7.4, y: 2.1, z: 0 }
            : window.innerHeight > 667
            ? { x: 6.1, y: 3.2, z: 0 }
            : { x: 6.2, y: 2.6, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.65
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.45
              : 0.5
            : window.innerHeight > 667
            ? 0.7
            : 0.8,

        signaturePosition:
          window.innerHeight > 667 ? { x: 6.1, y: 2.8, z: 0 } : { x: 6.2, y: 2.4, z: 0 },
        isBindSignature: true,
      },

      phone3: {  // camera
        id: 'phone3',
        url: 'images/slide-5-object-4.png',
        path: '/gltf/fold-4/camera/animations/gltf/',
        fileName: 'camera (anim group transitions).gltf',
        className: 'brand-model-4',
        rotation: { x: 0, y: 4.5, z: 0 },
        scaling:
          deviceName === 'Desktop'
            ? { x: 12, y: 12, z: 12 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 11, y: 11, z: 11 }
              : { x: 8, y: 8, z: 8 }
            : window.innerHeight > 667
            ? { x: 13, y: 13, z: 13 }
            : { x: 16, y: 16, z: 16 },

        position:
          deviceName === 'Desktop'
            ? { x: 7.8, y: 0.2, z: 0 }
            : deviceName === 'Mobile'
            ? orientation === 'potrait'
              ? { x: 5.8, y: 0.7, z: 0 }
              : { x: 7.4, y: 0.8, z: 0 }
            : window.innerHeight > 667
            ? { x: 6, y: -0.5, z: 0 }
            : { x: 6.2, y: -0.5, z: 0 },

        circlePosition:
          deviceName === 'Desktop'
            ? { x: 7.9, y: 0, z: 0 }
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? { x: 6.45, y: 0.7, z: 0 }
              : { x: 7.5, y: 0.55, z: 0 }
            : window.innerHeight > 667
            ? { x: 6, y: -0.5, z: 0 }
            : { x: 6.2, y: -0.5, z: 0 },

        circleRadius:
          deviceName === 'Desktop'
            ? 0.65
            : deviceName === 'Tablet'
            ? orientation === 'potrait'
              ? 0.4
              : 0.5
            : window.innerHeight > 667
            ? 0.7
            : 0.8,

        signaturePosition:
          window.innerHeight > 667 ? { x: 6, y: -0.3, z: 0 } : { x: 6.2, y: -0.2, z: 0 },
          isBindSignature: true,
      },
    };
  }
  componentDidMount() {
    this.loadModel(this.state.testingobject);
    THREE.Cache.enabled = true ;
  }


  shouldComponentUpdate() {
    if(this.props.activeSlide === (this.props.slideId - 1) || this.props.activeSlide === (this.props.slideId + 1) || this.props.activeSlide === this.props.slideId){
      return true;
    }
    else{ 
      return false;  
    }
}

componentDidUpdate(prevProps, prevState) {
   let elem = document.getElementById('testingobject');
  if(this.props.activeSlide === this.props.slideId){
    this.secondAnimation();
  }

  
}

  secondAnimation = () => {
    console.log("PLAYING THE BRANDING ANIMATION");
    /* when the component updates we reset the animation and play again the loading action for all four objects */


    if(loadingAction){
      loadingAction.reset();
      loadingAction.play();

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
    /* again playing on update */


  }  







  sceneClear = () => {
    if(this.state.brandScene != ""){
      while(this.state.brandScene.children.length > 0){
        // console.log("bradning scene is cleaned");
        this.state.brandScene.remove(this.state.brandScene.children[0]);
      }
    }
  }

  loadModel = async (obj) => {

    console.log("LOADING THE BRANDING 3D OBJECTS");

    let brandMouse = new THREE.Vector2();
    let th = this;
    let container = document.getElementById('testingobject');
    let height = container.clientHeight;
    let width = obj.id === 'idle-pigeon' ? window.innerWidth : container.clientWidth;
    let clock = new THREE.Clock();
    let loading,loading2, loading3, loading4, idle, idle2, idle3, idle4, signature, signature2, signature3, signature4;

    brandRenderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    brandRenderer.setPixelRatio(window.devicePixelRatio);
    brandRenderer.setSize(width, height);
    brandRenderer.setClearColor(0xffffff, 0);
    brandRenderer.outputEncoding = THREE.sRGBEncoding;
    container.appendChild(brandRenderer.domElement);
    this.state.brandScene = new THREE.Scene();
    circleScene = new THREE.Scene();

    brandCamera = new THREE.PerspectiveCamera(40, width / height, 0.1, 2000);
    brandCamera.position.set(5, 2, 8);
    let light2 = new THREE.PointLight(0xffffff, 2);
    light2.position.set(450, 100, 0);
    this.state.brandScene.add(light2);

    let light4 = new THREE.PointLight(0xffffff, 2);
    light4.position.set(-450, 300, 500);
    this.state.brandScene.add(light4);

    let brandRaycaster = new THREE.Raycaster();

    // loading the speaker or the testing objec
    // =========================================================================
    let gltf = await th.loadGLTFModel(this.state.testingobject.path, this.state.testingobject.fileName);
    model = gltf.scene;
    model.name = "RadioPlayer";   {/* other name is: radio_group2   */}
    model.position.set(this.state.testingobject.position.x, this.state.testingobject.position.y, this.state.testingobject.position.z);
    model.scale.set(this.state.testingobject.scaling.x, this.state.testingobject.scaling.y, this.state.testingobject.scaling.z);
    let mesh;
    model.rotation.x += this.state.testingobject.rotation.x;
    model.rotation.y +=  this.state.testingobject.rotation.y;
    model.rotation.z +=  this.state.testingobject.rotation.z;
    this.state.brandScene.add(model);
    mixer = new THREE.AnimationMixer(model);
    idleAction = mixer.clipAction(gltf.animations[0]);
    loadingAction = mixer.clipAction(gltf.animations[2]);
    loadingAction.setLoop(THREE.LoopOnce);
    loadingAction.clampWhenFinished = true;
    loadingAction.play();
    idleAction.play();
    signature = THREE.AnimationClip.findByName(gltf.animations, 'signature');
    signatureAction = mixer.clipAction(signature);
    signatureAction.setLoop(THREE.LoopOnce);


   // loading the phone 1 object into the Scene
   let gltf2 = await th.loadGLTFModel(this.state.phone1.path, this.state.phone1.fileName);
   model2 = gltf2.scene;
   model2.position.set(this.state.phone1.position.x, this.state.phone1.position.y, this.state.phone1.position.z);
   model2.scale.set(this.state.phone1.scaling.x, this.state.phone1.scaling.y, this.state.phone1.scaling.z);
   model2.rotation.x += this.state.phone1.rotation.x;
   model2.rotation.y +=  this.state.phone1.rotation.y;
   model2.rotation.z +=  this.state.phone1.rotation.z;
   model2.name = "shahzada two";
   this.state.brandScene.add(model2);
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


    // loading the phone2 object into the scene
    let gltf3 = await th.loadGLTFModel(this.state.phone2.path, this.state.phone2.fileName);
    model3 = gltf3.scene;
    model3.position.set(this.state.phone2.position.x, this.state.phone2.position.y, this.state.phone2.position.z);
    model3.scale.set(this.state.phone2.scaling.x, this.state.phone2.scaling.y, this.state.phone2.scaling.z);
    model3.rotation.x += this.state.phone2.rotation.x;
    model3.rotation.y +=  this.state.phone2.rotation.y;
    model3.rotation.z +=  this.state.phone2.rotation.z;
    model3.name = "shahzada three";
    this.state.brandScene.add(model3);
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

      // loading the phone3 object into the Scene
      let gltf4 = await th.loadGLTFModel(this.state.phone3.path, this.state.phone3.fileName);
      model4 = gltf4.scene;
      model4.position.set(this.state.phone3.position.x, this.state.phone3.position.y, this.state.phone3.position.z);
      model4.scale.set(this.state.phone3.scaling.x, this.state.phone3.scaling.y, this.state.phone3.scaling.z);
      model4.rotation.x += this.state.phone3.rotation.x;
      model4.rotation.y +=  this.state.phone3.rotation.y;
      model4.rotation.z +=  this.state.phone3.rotation.z;
      model4.name = "shahzada four";
      this.state.brandScene.add(model4);
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

/*  create an animation for loading the object  */
  






    if (obj.isBindSignature) {
      let playing = false;
  
      mixer.addEventListener('finished', function (e) {
     
        signatureAction.stop();
        // model.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
        // model.position.set(obj.position.x, obj.position.y, obj.position.z);

        idleAction.play();
      });

      mixer2.addEventListener('finished', function (e) {
       
        signatureAction2.stop();
        // model2.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
        // model2.position.set(obj.position.x, obj.position.y, obj.position.z);
        idleAction2.play();
      });

      mixer3.addEventListener('finished', function (e) {
        
        signatureAction3.stop();
        // model3.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
        // model3.position.set(obj.position.x, obj.position.y, obj.position.z);
        idleAction3.play();
      });

      mixer4.addEventListener('finished', function (e) {
        signatureAction4.stop();
        // model4.scale.set(obj.scaling.x, obj.scaling.y, obj.scaling.z);
        // model4.position.set(obj.position.x, obj.position.y, obj.position.z);
        idleAction4.play();
      });
      
  
      function clicked2(event, isClicked) {
        brandMouse.x = (event.clientX / window.innerWidth) * 2 - 1;
        brandMouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
          brandRaycaster.setFromCamera(brandMouse, brandCamera);
          let brandIntersects = brandRaycaster.intersectObjects(th.state.brandScene.children, true);

          if (brandIntersects.length > 0) {
              if(brandIntersects[0].object.parent.parent.name == 'radio_group2' || brandIntersects[0].object.parent.parent.name == "RadioPlayer" ){
                if(isClicked){
                  signatureAction.stop();
                }
                signatureAction2.stop();
                signatureAction3.stop();
                signatureAction4.stop();
                signatureAction.play();
              }
              else if(brandIntersects[0].object.parent.parent.name == 'mic_group1'){
                signatureAction.stop();
                if(isClicked){ signatureAction2.stop(); }
                signatureAction3.stop();
                signatureAction4.stop();
                signatureAction2.play();
              }
              else if(brandIntersects[0].object.parent.name == 'camera_group2'){
                signatureAction.stop();
                signatureAction2.stop();
                signatureAction3.stop();
                if(isClicked){ signatureAction4.stop();}
                signatureAction4.play();
              }
              else if(brandIntersects[0].object.parent.name = 'bulb_group2'){

                signatureAction.stop();
                signatureAction2.stop();
                if(isClicked){ signatureAction3.stop();}
                signatureAction4.stop();
                signatureAction3.play();

              }
          }
      }
      document.addEventListener('mousemove', function (event) {
        clicked2(event, false);
        brandCamera.updateMatrixWorld();
      });

      let deviceName = getDeviceName();
      document.addEventListener('click', function (event) {
        if (deviceName === 'Mobile') {
          clicked2(event, true);
          brandCamera.updateMatrixWorld();
        } else{
          clicked2(event, true);
          brandCamera.updateMatrixWorld();      
        }
      }
      );
    }
    animate();
    window.onresize = function () {
      height = container.clientHeight;
      width = container.clientWidth;
      brandCamera.aspect = width / height;
      brandCamera.updateProjectionMatrix();
      brandRenderer.setSize(width, height);
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
        brandRenderer.autoClear = true;
        brandRenderer.render(th.state.brandScene, brandCamera);
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


  scrolldownmethod(targetdiv){
    var targetid = '#' + targetdiv;
    $(targetid)[0].scrollIntoView({
    behavior: 'smooth'
      });
  }

 mobileSlideChange(targetSlide){
   console.log("change the slide nigga"); 
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


openmodel = () => {
  console.log("open the model");
}
closemodel = () => {
  console.log("close this model");
}

render() {
  return (
 <div onScroll = {this.removeSliderArrow} className="slide-section toggleDetails scroll-down-trigger">
<div
  className="contentSlideSection slide-content-wrapper p41 d-flex flex-column slidetwo"
  id="content-wrapper2"
  onScroll={(event) => addStickyHeader(event.target)}
>


{/* mobile slider navigation for arabic */}

{/* mobile slider naviagation for english */}


{ this.props.prevSlide 
? <a  className = "mobile-arrow-div-left" onClick = {this.props.language === 'en-US' ? this.props.prevSlide : this.props.nextSlide }>
 <img src = "/images/prev.png" alt = "left arrow"/> 
</a>
 : ''
 }
{this.props.nextSlide 
?<a   className = "mobile-arrow-div-right" onClick = {this.props.language === 'en-US' ? this.props.nextSlide : this.props.prevSlide }>
 <img src = "/images/next.png" alt = "next arrow" />
</a>
: ''
}






{/* { this.props.prevSlide 
? <a  className = "mobile-arrow-div-left" onClick = {this.props.prevSlide }>
<img src = "/images/prev.png" alt = "left arrow"/> 
</a>
 : ''
 }
{this.props.nextSlide 
?<a   className = "mobile-arrow-div-right" onClick = {this.props.nextSlide}>
<img src = "/images/next.png" alt = "next arrow" />
</a>
: ''
} */}



          <div className="mg-slide-content text-center flex-fill d-flex align-items-start align-items-md-center">
            <div className="container dt_container" id="container2">
     <div className="mg-slide-info text-left m-auto" id="info2">
                <div className="showdetail">
                  <h5 className="mg-title-light fw-light">
                  {this.props.language === 'en-US' 
                   ?<>{this.props.data.sliders[0].short_title}</>
                   :<>{this.props.data.sliders[0].short_title_arabic}</>
                  }
                 </h5>
                   
                  <h1 className="mg-title">
                  {this.props.language === 'en-US' 
                  ? <>{this.props.data.sliders[0].title}</>
                  : <>{this.props.data.sliders[0].title_arabic}</>
                   }
                   </h1>
                  <p className="mg-p truncate-height mb-hide-description">
                  {this.props.language === 'en-US' 
                  ? <>{this.props.data.sliders[0].description}</>
                  : <>{this.props.data.sliders[0].description_arabic}</>
                   }
             </p>

                  <button onClick = {() => this.scrolldownmethod('br-targetdiv')} className="btn theme-btn xs-hidden">
                    <img src="/images/scrollDown.png" alt = "scroll down" />
                    {this.props.language === 'en-US'
                      ? <>SCROLL UP</>
                      :<>انتقل إلى أعلى</>
                        }   
                  </button>
                </div>
  
              </div>
   
           <Suspense fallback = "Loading...">
             <BrandingContent
             data = {this.props.data.sliders[0]}
             services = {this.props.data.services}
             books = {this.props.data.books}/> 
          </Suspense>   
           
          
          
          </div>

          
          </div>


    
     



          <div className="slide-object-img-wrapper contact-img-wrapper" id="testingobject"></div>
        
        </div>
      </div>
    );
  }
}

export default React.memo(BrandingSlide);