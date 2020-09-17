module.exports = {
  runtimeCompiler: true,

  pluginOptions: {
    s3Deploy: {
      registry: undefined,
      awsProfile: 'default',
      overrideEndpoint: false,
      region: 'us-west-1',
      bucket: 'zzandland.io',
      createBucket: true,
      staticHosting: true,
      staticIndexPage: 'index.html',
      staticErrorPage: 'index.html',
      assetPath: 'dist',
      assetMatch: '**',
      deployPath: '/',
      acl: 'public-read',
      pwa: false,
      enableCloudfront: false,
      pluginVersion: '4.0.0-rc3',
      uploadConcurrency: 5,
    },
  },
};
