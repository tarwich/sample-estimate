const Bundler = require('parcel-bundler');
const { resolve } = require('path');
const { spawn } = require('child_process')
const yamljs = require('yaml-js');
const { readFileSync, watch, writeFileSync } = require('fs');

const convertYml = () => {
  const json = yamljs.load(readFileSync(resolve('estimate.yml')));
  writeFileSync(
    resolve('src/estimate.js'),
    `module.exports = ${JSON.stringify(json, null, '  ')}\n`
  );
};

watch(resolve('estimate.yml'), {}, convertYml);
convertYml();

const npm = /^win/.test(process.platform) ? 'npm.cmd' : 'npm';
spawn(npm, ['start'], {env: process.env, stdio: 'inherit'});
