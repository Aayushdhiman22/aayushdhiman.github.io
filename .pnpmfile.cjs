function readPackageHook(pkg) {
  return pkg;
}

module.exports = {
  hooks: {
    readPackage: readPackageHook,
  },
};
