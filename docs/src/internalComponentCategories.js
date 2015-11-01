export default {
  React3: true,
  'Internal Components': {
    children: {
      Views: {
        children: {
          viewport: {
            isComponent: true,
          },
        },
      },
      Objects: {
        children: {
          scene: {
            isComponent: true,
          },
          object3D: {
            isComponent: true,
          },
          group: {
            isComponent: true,
          },
          Cameras: {
            children: {
              orthographicCamera: {
                isComponent: true,
              },
              perspectiveCamera: {
                isComponent: true,
              },
              cubeCamera: {
                isComponent: true,
              },
            },
          },
          Meshes: {
            children: {
              mesh: {
                isComponent: true,
              },
              line: {
                isComponent: true,
              },
              points: {
                isComponent: true,
              },
            },
            TODO: [
              'Bone',
              'LensFlare',
              'LineSegments',
              'LOD',
              'MorphAnimMesh',
              'SkinnedMesh',
              'Skeleton',
              'Sprite',
            ],
          },
          Lights: {
            children: {
              ambientLight: {
                isComponent: true,
              },
              directionalLight: {
                isComponent: true,
              },
              spotLight: {
                isComponent: true,
              },
              pointLight: {
                isComponent: true,
              },
            },
            TODO: [
              'HemisphereLight',
              'Light',
            ],
          },
          Helpers: {
            children: {
              cameraHelper: {
                isComponent: true,
              },
              axisHelper: {
                isComponent: true,
              },
              arrowHelper: {
                isComponent: true,
              },
            },
            TODO: [
              'BoundingBoxHelper',
              'BoxHelper',
              'DirectionalLightHelper',
              'EdgesHelper',
              'FaceNormalsHelper',
              'GridHelper',
              'HemisphereLightHelper',
              'PointLightHelper',
              'SpotLightHelper',
              'VertexNormalsHelper',
              'WireframeHelper',
            ],
          },
        },
      },
      Materials: {
        children: {
          meshBasicMaterial: {
            isComponent: true,
          },
          meshPhongMaterial: {
            isComponent: true,
          },
          meshLambertMaterial: {
            isComponent: true,
          },
          meshDepthMaterial: {
            isComponent: true,
          },
          meshNormalMaterial: {
            isComponent: true,
          },
          pointsMaterial: {
            isComponent: true,
          },
          lineBasicMaterial: {
            isComponent: true,
          },
          lineDashedMaterial: {
            isComponent: true,
          },
          spriteMaterial: {
            isComponent: true,
          },
          shaderMaterial: {
            isComponent: true,
            children: {
              uniforms: {
                isComponent: true,
                children: {
                  uniform: {
                    isComponent: true,
                  },
                },
              },
            },
          },
        },
        TODO: [
          'Material',
          'MeshFaceMaterial',
          'RawShaderMaterial',
          'SpriteCanvasMaterial',
          'SpriteMaterial',
        ],
      },
      Textures: {
        children: {
          texture: {
            isComponent: true,
          },
        },
        TODO: [
          'CubeTexture',
          'CompressedTexture',
          'DataTexture',
        ],
      },
      Geometries: {
        children: {
          geometry: {
            isComponent: true,
          },
          boxGeometry: {
            isComponent: true,
          },
          sphereGeometry: {
            isComponent: true,
          },
          parametricGeometry: {
            isComponent: true,
          },
          planeBufferGeometry: {
            isComponent: true,
          },
          icosahedronGeometry: {
            isComponent: true,
          },
          octahedronGeometry: {
            isComponent: true,
          },
          tetrahedronGeometry: {
            isComponent: true,
          },
          circleGeometry: {
            isComponent: true,
          },
          circleBufferGeometry: {
            isComponent: true,
          },
          ringGeometry: {
            isComponent: true,
          },
          cylinderGeometry: {
            isComponent: true,
          },
          latheGeometry: {
            isComponent: true,
          },
          torusGeometry: {
            isComponent: true,
          },
          torusKnotGeometry: {
            isComponent: true,
          },
          extrudeGeometry: {
            isComponent: true,
          },
        },
        TODO: [
          'CubeGeometry',
          'DodecahedronGeometry',
          'PlaneGeometry',
          'PolyhedronGeometry',
          'ShapeGeometry',
          'TextGeometry',
          'TubeGeometry',
        ],
      },
      Shapes: {
        children: {
          shape: {
            isComponent: true,
            children: {
              moveTo: {
                isComponent: true,
              },
              lineTo: {
                isComponent: true,
              },
              bezierCurveTo: {
                isComponent: true,
              },
              quadraticCurveTo: {
                isComponent: true,
              },
              absArc: {
                isComponent: true,
              },
              absEllipse: {
                isComponent: true,
              },
              splineThru: {
                isComponent: true,
              },
              hole: {
                isComponent: true,
              },
            },
          },
        },
        TODO: [
          'Curve',
          'CurvePath',
          'Gyroscope',
          'Path',
        ],
      },
      'Resource Types': {
        children: {
          resources: {
            isComponent: true,
          },
          materialResource: {
            isComponent: true,
          },
          textureResource: {
            isComponent: true,
          },
          geometryResource: {
            isComponent: true,
          },
          shapeResource: {
            isComponent: true,
          },
          shapeGeometryResource: {
            isComponent: true,
          },
        },
      },
      Advanced: {
        children: {
          react3: {
            isComponent: true,
          },
          module: {
            isComponent: true,
          },
          React3Renderer: true,
        },
      },
    },
  },
};
