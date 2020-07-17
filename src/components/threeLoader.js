import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";
import ReactTooltip from "react-tooltip";
import { css } from "@emotion/core";
import ClipLoader from "react-spinners/PulseLoader";
import "../styles/loader.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: #1d1d1f !important;
`;

class Loader extends Component {
  componentDidMount() {
    this.bike();
    // this.spinner();
  }

  // spinner = () => {
  //   // document.querySelector(".loader_body").classList.add("hide");
  //   // setTimeout(() => {
  //   //   document.querySelector(".spinner").classList.add("hide");
  //   //   // document.querySelector(".loader_body").classList.remove("hide");
  //   // }, 12000);
  // };

  bike = () => {
    // document.getElementById("grey").addEventListener("click", changeFrameColor);
    document
      .getElementById("black")
      .addEventListener("click", changeFrameColor);
    document
      .getElementById("light")
      .addEventListener("click", changeFrameColor);

    window.addEventListener("resize", onWindowResize);

    function changeFrameColor(e) {
      let element = e.target.id;
      let frame;
      // if (element === "grey") {
      //   frame = new THREE.MeshPhongMaterial({
      //     color: 0x808080,
      //   });
      // }
      if (element === "black") {
        frame = new THREE.MeshPhongMaterial({
          color: 0x000000,
        });
      }
      if (element === "light") {
        frame = new THREE.MeshPhongMaterial({
          color: 0x767676,
        });
      }
      initFrame(bike, frame);
    }

    var camera, scene, renderer, bike;

    let container = document.getElementById("container");

    // scene

    scene = new THREE.Scene();

    // background

    scene.background = new THREE.Color(0xffffff);

    // renderer

    renderer = new THREE.WebGLRenderer({
      container,
      antialias: true,
    });
    renderer.shadowMap.enabled = true;
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ReinhardToneMapping;
    renderer.toneMappingExposure = 1.5;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    container.appendChild(renderer.domElement);

    // camera

    camera = new THREE.PerspectiveCamera(
      75,
      container.clientWidth / container.clientHeight,
      2,
      20000
    );
    scene.add(camera);
    let controls = new OrbitControls(camera, renderer.domElement);
    controls.update();
    let loader = new GLTFLoader();
    let url = process.env.PUBLIC_URL + "/assets/bike.glb";

    const TYRE_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });
    const FRAME_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });
    // tmps are dust caps in tyre
    const TMPS_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });

    const LOCK_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });

    // glass

    const GLASS_MTL = new THREE.MeshPhongMaterial({
      color: 0xffffff,
    });

    // front panel

    const FRONT_PANEL_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });

    // front lock

    const FRONT_LOCK_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });

    // mud gaurd center mount

    const MUDGUARD_MOUNT_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });

    // mid frame color

    const MID_FRAME_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });

    // chain link color

    const CHAINLINK_MTL = new THREE.MeshPhongMaterial({
      color: 0x808080,
    });

    // front mudgaurd mount cad
    const FRONT_MUDCAD_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });

    // battery lock
    const BATTERY_LOCK_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });

    // disc

    const DISC_MTL = new THREE.MeshPhongMaterial({
      color: 0xc0c0c0,
    });

    // rim material

    const RIM_MTL = new THREE.MeshPhongMaterial({
      color: 0x000000,
    });

    // reflector material

    const REFLECTOR_MTL = new THREE.MeshPhongMaterial({
      color: 0xcc0000,
    });

    let dracoLoader = new DRACOLoader();
    dracoLoader.setDecoderConfig({ type: "js" });
    dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");

    loader.setDRACOLoader(dracoLoader);
    loader.loadAsync(url).then(function (gltf) {
      bike = gltf.scene;

      bike.traverse((o) => {
        if (o.isMesh) {
          o.castShadow = true;
          o.receiveShadow = true;
          if (o.material.map) {
            o.material.map.anisotropy = 16;
          }
        }
      });

      const boundingBox = new THREE.Box3();
      boundingBox.setFromObject(bike);
      const center = new THREE.Vector3();
      boundingBox.getCenter(center);
      camera.position.y = center.y - 200;
      camera.position.x = center.x + 700;
      camera.updateProjectionMatrix();
      const size = new THREE.Vector3();
      boundingBox.getSize(size);

      const fov = camera.fov * (Math.PI / 180);
      const maxDim = Math.max(size.x, size.y, size.z);
      let cameraZ = Math.abs((maxDim / 4) * Math.tan(fov * 2));

      camera.position.z = cameraZ + 1200;
      camera.updateProjectionMatrix();
      bike.position.setY(-500);
      bike.position.setZ(-50);
      camera.lookAt(center);

      initColor(bike, TYRE_MTL);
      initFrame(bike, FRAME_MTL);

      scene.add(gltf.scene);

      document.querySelector(".spinner").classList.add("hide");
    });

    function initFrame(parent, mtl) {
      parent.traverse((o) => {
        if (o.name === "frame") {
          o.material = mtl;
        }
        if (o.name === "handle") {
          o.material = mtl;
        }
        if (o.name === "handle_grip") {
          o.material = mtl;
        }
      });
    }

    function initColor(parent, mtl) {
      parent.traverse((o) => {
        if (o.name === "ttyre") {
          o.material = mtl;
        }
        if (o.name === "battery_lock") {
          o.material = BATTERY_LOCK_MTL;
          o.material.visible = false;
        }
        if (o.name === "tmps") {
          o.material = TMPS_MTL;
        }
        if (o.name === "lock_1") {
          o.material = LOCK_MTL;
        }
        if (o.name === "glass") {
          o.material = GLASS_MTL;
        }
        if (o.name === "front_plate_front_-_Copy_-_Copy") {
          o.material = FRONT_PANEL_MTL;
        }
        if (o.name === "lock") {
          o.material = FRONT_LOCK_MTL;
        }
        if (o.name === "front_mudguard_center_mount_20") {
          o.material = MUDGUARD_MOUNT_MTL;
        }
        if (o.name === "frame_-_Copy_(2)") {
          o.material = MID_FRAME_MTL;
        }
        if (o.name === "chainlink") {
          o.material = CHAINLINK_MTL;
        }
        if (o.name === "front_mudguard_mount_1") {
          o.material = FRONT_MUDCAD_MTL;
        }
        if (o.name === "steering_cap_reno") {
          o.material = mtl;
        }
        if (o.name === "front_mudguard_mount_cad") {
          o.material = FRONT_MUDCAD_MTL;
        }

        if (o.name === "Remgreep_Saccon") {
          o.material = mtl;
        }
        if (o.name === "seat") {
          o.material = mtl;
        }

        if (o.name === "rear_clamp_disc") {
          o.material = mtl;
        }
        if (o.name === "3D") {
          o.material = mtl;
        }
        if (o.name === "disc") {
          o.material = DISC_MTL;
        }
        if (o.name === "front_clamp") {
          o.material = mtl;
        }

        if (o.name === "rim") {
          o.material = RIM_MTL;
        }

        if (o.name === "rear_mudguard_center_mount_20") {
          o.material = MUDGUARD_MOUNT_MTL;
        }

        if (o.name === "mudguard_front_3") {
          o.material = mtl;
        }
        if (o.name === "mudguard_rear_3") {
          o.material = mtl;
        }
        if (o.name === "battery_outer_case") {
          o.material = mtl;
        }
        if (o.name === "peg") {
          o.material = mtl;
        }
        if (o.name === "rear_mudguard_mount_cad") {
          o.material = mtl;
        }
        if (o.name === "calliper") {
          o.material = mtl;
        }
        if (o.name === "rear_clamp") {
          o.material = mtl;
        }
        if (o.name === "socket_head_cap_screw_am") {
          o.material = mtl;
        }
        if (o.name === "Reflector") {
          o.material = REFLECTOR_MTL;
        }
        if (o.name === "front_disc_mount") {
          o.material = mtl;
        }
        if (o.name === "front_brake_liner") {
          o.material = mtl;
        }
        if (o.name === "rear_brake_liner") {
          o.material = mtl;
        }
        if (o.name === "adapter_A_F160_R140") {
          o.material = mtl;
        }
        if (o.name === "rear_shaft_wheel_20") {
          o.material = mtl;
        }
        if (o.name === "front_shaft_wheel_20") {
          o.material = mtl;
        }
        if (o.name === "SF-MX30_Shimano_Freewheel") {
          o.material = mtl;
        }
        if (o.name === "socket_head_cap_screw_is") {
          o.material = mtl;
        }
        if (o.name === "hex_flange_nut_am") {
          o.material = mtl;
        }
        if (o.name === "inner_battery_case") {
          o.material = mtl;
        }
        if (o.name === "mudguard_rear_mount_2") {
          o.material = mtl;
        }
        if (o.name === "hex_flange_nut_am") {
          o.material = mtl;
        }
        if (o.name === "lock_nut_is") {
          o.material = mtl;
        }
      });
    }

    var hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 1);
    hemiLight.position.set(0, 500, 0);
    // hemiLight.castShadow = true;
    // hemiLight.shadow.mapSize.width = 1024;
    // hemiLight.shadow.mapSize.height = 1024;
    // scene.add(hemiLight);

    let dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    // dirLight.position.set(0, 100, 0);
    // dirLight.castShadow = true;
    // dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
    scene.add(dirLight);

    let shadowLight = new THREE.DirectionalLight(0xffffff, 1, 100);
    shadowLight.position.set(0, 500, 0);
    shadowLight.castShadow = true;
    shadowLight.shadow.camera.near = 2;
    shadowLight.shadow.camera.far = 20000;
    shadowLight.shadow.camera.left = 600;
    shadowLight.shadow.camera.right = 600;
    shadowLight.shadow.camera.top = 600;
    shadowLight.shadow.camera.bottom = 600;
    scene.add(shadowLight);

    let floorGeometry = new THREE.PlaneGeometry(500, 500, 1, 1);
    let floorMaterial = new THREE.MeshPhongMaterial({
      color: 0xff0000,
      shininess: 0,
    });

    let floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.receiveShadow = true;
    floor.rotation.z = 1 * Math.PI;
    floor.rotation.x = 0.5 * Math.PI;
    floor.position.y = -700;
    floor.position.z = -700;

    // floor.rotation.z = 500;
    // scene.add(floor);

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      dirLight.position.set(
        camera.position.x + 10,
        camera.position.y + 10,
        camera.position.z + 500
      );
      controls.update();
    }

    animate();

    function onWindowResize() {
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(container.clientWidth, container.clientHeight);
    }
  };

  render() {
    return (
      <div>
        <div className="spinner">
          <ClipLoader
            css={override}
            size={20}
            color={"#1d1d1f"}
            loading={true}
          />
          <h2 className="spinner-text">Loading 3D Experience</h2>
        </div>
        <div className="loader_body">
          <div className="loader" id="container" />
          <div className="color-btn-wrapper">
            <button
              data-tip
              data-for="black-btn"
              className="black"
              id="black"
            ></button>
            <ReactTooltip id="black-btn" place="top" effect="solid">
              matte black
            </ReactTooltip>
            <button
              data-tip
              data-for="light-btn"
              className="light"
              id="light"
            ></button>
            <ReactTooltip id="light-btn" place="top" effect="solid">
              drak grey
            </ReactTooltip>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
