const projectName = '/org';
const requestBase = (process.env.NODE_ENV ==='development')? '/api':'';
const ajaxBase = projectName + requestBase;
module.exports = {
  projectName,
  requestBase,
  ajaxBase,

};

