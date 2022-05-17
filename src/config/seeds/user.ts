import User from '../../models/User';
//import crypto = require('../globs/crypto');

export default () =>
  User.bulkCreate(
    [
      {
        name: 'admin',
        firstName: 'John',
        lastName: 'Doe',
        email: 'john-doe@admin.com',
        password: 'password',
      },
      {
        name: 'cheynel0',
        firstName: 'Cassi',
        lastName: 'Heynel',
        email: 'cheynel0@symantec.com',
        password: '5zZkGjVTSRj',
      },
      {
        name: 'ccorrin1',
        firstName: 'Cristina',
        lastName: 'Corrin',
        email: 'ccorrin1@webnode.com',
        password: 'kd62kdg',
      },
      {
        name: 'tmcclelland2',
        firstName: 'Tasha',
        lastName: 'McClelland',
        email: 'tmcclelland2@shareasale.com',
        password: 'Z57zih955r',
      },
      {
        name: 'sdabbotdoyle3',
        firstName: 'Sheffy',
        lastName: "D'Abbot-Doyle",
        email: 'sdabbotdoyle3@stumbleupon.com',
        password: 'XU4PTwBJ4Se0',
      },
      {
        name: 'emarioneau4',
        firstName: 'Erinn',
        lastName: 'Marioneau',
        email: 'emarioneau4@rakuten.co.jp',
        password: '7KFqN2lRd6EL',
      },
      {
        name: 'khendrich5',
        firstName: 'Kippie',
        lastName: 'Hendrich',
        email: 'khendrich5@ustream.tv',
        password: 'iAlPWhEPqEvt',
      },
      {
        name: 'tyanukhin6',
        firstName: 'Tobiah',
        lastName: 'Yanukhin',
        email: 'tyanukhin6@smh.com.au',
        password: 'X9E1g4VHy',
      },
      {
        name: 'kcollumbine7',
        firstName: 'Konstance',
        lastName: 'Collumbine',
        email: 'kcollumbine7@wired.com',
        password: 'oV2geP',
      },
    ],
    {
      fields: ['name', 'firstName', 'lastName', 'email', 'password'],
      ignoreDuplicates: true,
    },
  );
