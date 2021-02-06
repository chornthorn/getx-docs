module.exports = {
  docs: {
    Introduction: [
      'introduction/getting-started',
      'introduction/installation'
    ],
    Tutorials: [
      'tutorials/tutorials-index',
      {
        type: 'category',
        label: 'Flutter Essentials',
        items: [
          'tutorials/flutter/essentials/part-1-overview-concepts'
        ]
      }
    ],
    Firebase: [
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
          'firebases/cloud-firestores/cloud-firebase'
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
        label: 'Cloud Store',
        items: [
          'firebases/cloud-store/intro'
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
    StateManagement: [
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
    ]
  }
}
