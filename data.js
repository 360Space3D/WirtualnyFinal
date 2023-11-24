var APP_DATA = {
  "scenes": [
    {
      "id": "0-pano-m11-korytarz",
      "name": "pano m11 korytarz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.8198139927259334,
          "pitch": 0.06243397814981577,
          "rotation": 0,
          "target": "1-pano-m11-lazienka"
        },
        {
          "yaw": -0.2526698459537915,
          "pitch": 0.03674982704714935,
          "rotation": 0,
          "target": "2-pano-m11-salon"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-pano-m11-lazienka",
      "name": "pano m11 lazienka",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.7560373175086887,
          "pitch": 0.17094983058928293,
          "rotation": 0,
          "target": "0-pano-m11-korytarz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-pano-m11-salon",
      "name": "pano m11 salon",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.21468423726106778,
          "pitch": 0.03297792973421565,
          "rotation": 0,
          "target": "0-pano-m11-korytarz"
        },
        {
          "yaw": -0.4624777528008863,
          "pitch": 0.033926846512024156,
          "rotation": 4.71238898038469,
          "target": "1-pano-m11-lazienka"
        },
        {
          "yaw": -1.7706834494828456,
          "pitch": 0.07552311934332323,
          "rotation": 0,
          "target": "3-pano-m11-sypialnia"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-pano-m11-sypialnia",
      "name": "pano m11 sypialnia",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.7652453433309532,
          "pitch": 0.06010057817341874,
          "rotation": 0,
          "target": "2-pano-m11-salon"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
