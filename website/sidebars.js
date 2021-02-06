module.exports = {
  docs: {
    "Getting Started": [
      'introduction/getting-started',
      'introduction/installation'
    ],
    "Flutter Tutorials": [
      'tutorials/index',
      {
        type: 'category',
        label: 'Flutter Essentials',
        items: [
          'tutorials/flutter/essentials/part-1-overview-concepts'
        ]
      }
    ],
    "Flutter Firebase": [
      'firebases/firebase-index',
      {
        type: 'category',
        label: 'Authentication',
        items: [
          'firebases/authentication/authentication'
        ]
      },
      {
        type: 'category',
        label: 'Cloud Firestore',
        items: [
          'firebases/cloud-firestore/cloud-firestore'
        ]
      },
      {
        type: 'category',
        label: 'Cloud Functions',
        items: [
          'firebases/cloud-functions/intro'
        ]
      },
      {
        type: 'category',
        label: 'Cloud Messaging',
        items: [
          'firebases/cloud-messaging/intro'
        ]
      },
      {
        type: 'category',
        label: 'Cloud Storage',
        items: [
          'firebases/cloud-storage/intro'
        ]
      },
      {
        type: 'category',
        label: 'Realtime Database',
        items: [
          'firebases/realtime-database/intro'
        ]
      }
    ],
    "State Management": [
      'state-managements/get-started',
      {
        type: 'category',
        label: 'Flutter Provider',
        items: [
          'state-managements/flutter-provider/intro'
        ]
      },
      {
        type: 'category',
        label: 'Flutter Bloc',
        items: [
          'state-managements/flutter-bloc/intro'
        ]
      },
      {
        type: 'category',
        label: 'Flutter GetX',
        items: [
          'state-managements/flutter-getx/intro'
        ]
      }
    ],
    "Flutter Flavor": [
      'flavors/index',
      {
        type: 'category',
        label: 'Android',
        items: [
          'flavors/android/intro'
        ]
      },
      {
        type: 'category',
        label: 'IOS',
        items: [
          'flavors/ios/intro'
        ]
      }
    ],
    "Blog Post": [
      'blog/index'
    ],
  }
}
