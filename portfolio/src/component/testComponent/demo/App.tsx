import React from 'react';
import { WebGLRenderer, Scene, PerspectiveCamera, Color, BoxGeometry, MeshBasicMaterial, Mesh} from 'three';
import './app.module.css';

class App extends React.Component {
  private scene: Scene | null = null;
  private camera: PerspectiveCamera | null = null;
  private renderer: WebGLRenderer | null = null;
  private cube: BoxGeometry | null = null;
  private material: MeshBasicMaterial | null = null;
  private mesh: Mesh | null = null;

  constructor(props: any) {
    super(props);
    this.animate = this.animate.bind(this);
    this.onResize();
  }

  onCanvasLoaded = (canvas: HTMLCanvasElement) => {
    if (!canvas) {
      return;
    } 
    this.renderer = new WebGLRenderer({ canvas: canvas, antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.scene = new Scene();
    this.scene.background = new Color( 0xbfe3dd );
    this.camera = new PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
    this.cube = new BoxGeometry(1,1,1);
    this.material = new MeshBasicMaterial({ color: '#F5B232'});
    this.mesh = new Mesh(this.cube, this.material);
    this.scene.add(this.mesh);
    this.camera.position.z = 4;


    this.animate();
  };

  componentDidMount = () => {
    window.addEventListener('resize', this.onResize, false);
  }
  componentWillUnmount = () => {
    window.removeEventListener('resize', this.onResize, false);
  }

  onResize = () => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (this.renderer) {
      this.renderer.setPixelRatio(window.devicePixelRatio);
      this.renderer.setSize(width, height);
    }

    if (this.camera){
      this.camera.aspect = width/height;
      this.camera.updateProjectionMatrix();
    }
  }

  animate() { 
    this.roteCube();
    window.requestAnimationFrame(this.animate);
    if (this.renderer && this.scene && this.camera) {
      this.renderer.render(this.scene, this.camera);
    }
  }

  roteCube() {
    if(this.mesh){
      this.mesh.rotation.x += 0.005;
      this.mesh.rotation.y += 0.01;
    }
  }

  render():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | string
    | number
    | {}
    | React.ReactNodeArray
    | React.ReactPortal
    | boolean
    | null
    | undefined {
    return (
      <div>
        <canvas ref={this.onCanvasLoaded} />
      </div>
    );
  }
}

export default App;