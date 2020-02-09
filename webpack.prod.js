import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import CompressionPlugin from 'compression-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import ImageminMozjpeg from 'imagemin-mozjpeg';
import ImageminSvgo from 'imagemin-svgo';
import ImageminPngquant from 'imagemin-pngquant';
import WorkboxPlugin from 'workbox-webpack-plugin';
import config, { BUILD_FOLDER, REPORTS_FOLDER } from './webpack.config.js';

/**
 * Node >= 11.7.0 has native support for brotli compression algorithm.
 * Compression will try to fallback on the "brotli" dependency in case it is not natively available
 *
 * @credit https://github.com/mynameiswhm/brotli-webpack-plugin/blob/1.1.0/compress.js
 *
 * @return function
 */
function getBrotliAdapter() {
  // Try to use native node brotli compression algorithm from zlib
  try {
    const zlib = require('zlib');
    /* eslint-disable-next-line no-prototype-builtins */
    if (zlib.hasOwnProperty('brotliCompress')) {
      return zlib.brotliCompress;
    }
  } catch (error) {} /* eslint-disable-line no-empty */

  // Try to fallback on "brotli" dependency if native support is not available
  try {
    const brotli = require('brotli');
    return (input, compressionOptions, callback) =>
      callback(null, brotli.compress(input, compressionOptions));
  } catch (error) {} /* eslint-disable-line no-empty */

  throw new Error(
    'No brotli adapter found. Please make sure you are either running node >= 11.7.0 or install the "brotli" module as a dependency.'
  );
}

export default merge(config, {
  mode: 'production',
  output: {
    chunkFilename: '[chunkhash:8].chunk.js',
    crossOriginLoading: 'anonymous',
    filename: '[hash:8].js',
    path: BUILD_FOLDER,
    publicPath: '/'
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new ImageminPlugin({
      plugins: [
        ImageminMozjpeg({
          progressive: true,
          quality: 55
        }),
        ImageminPngquant({
          quality: [0.3, 0.5]
        }),
        ImageminSvgo({
          removeViewBox: false,
          removeDimensions: true
        })
      ]
    }),
    new WorkboxPlugin.GenerateSW({
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      directoryIndex: 'index.html',
      navigateFallback: 'index.html',
      skipWaiting: true,
      swDest: 'sw.js',
      globIgnores: ['*.html', '**/*.html'],
      exclude: [
        /\.map$/, // Source map files
        /^manifest.*\.js$/, // Manifests
        'sw.js' // Do NOT cache SW file!
      ],
      runtimeCaching: [
        {
          urlPattern: new RegExp('^https://(cdn\\.contentful\\.com|polyfill\\.io)'),
          handler: 'NetworkFirst',
          options: {
            cacheName: 'content',
            cacheableResponse: {
              statuses: [0, 200] // Make sure only valid responses (not errors) are cached
            }
          }
        },
        {
          // Only cache static assets (not HTML documents)
          urlPattern: /\.(?:js|css|txt|xml|json|md|ico|jpe?g|png|gif|webp|svg|woff2?|webapp|webmanifest)$/,
          handler: 'StaleWhileRevalidate',
          options: {
            cacheableResponse: {
              statuses: [0, 200] // Make sure only valid responses (not errors) are cached
            }
          }
        }
      ]
    }),
    new CompressionPlugin({
      algorithm: 'gzip',
      compressionOptions: {
        level: 9
      },
      deleteOriginalAssets: false,
      filename: '[path].gz[query]',
      minRatio: 0.8,
      test: /\.(js|css|html|txt|xml|json|md|ico|jpe?g|png|gif|webp|svg|woff2?|webapp|webmanifest)$/,
      threshold: 1024
    }),
    new CompressionPlugin({
      algorithm: getBrotliAdapter(),
      compressionOptions: {
        quality: 11,
        mode: 0
      },
      deleteOriginalAssets: false,
      filename: '[path].br[query]',
      minRatio: 0.8,
      test: /\.(js|css|html|txt|xml|json|md|ico|jpe?g|png|gif|webp|svg|woff2?|webapp|webmanifest)$/,
      threshold: 1024
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'static',
      openAnalyzer: false,
      reportFilename: path.resolve(REPORTS_FOLDER, `build-report_${new Date().getTime()}.html`)
    })
  ],
  optimization: {
    minimize: true,
    splitChunks: {
      // You will probably need to adjust this strategy to your needs
      chunks: 'all'
    }
  },
  performance: {
    maxEntrypointSize: 128000,
    maxAssetSize: 128000,
    hints: 'warning'
  }
});
