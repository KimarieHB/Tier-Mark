const db = require('./index.js');


// bundle
// for each bundle 1-100
// 3 random tiers
// random cost 5-20
const seedBundle = () => {
  var bundleId, tierId1, tierId2, tierId3, cost, tierOrder;
  var bundleData = [];
  for (let i = 0; i <= 99; i++) {
    bundleId = i;
    cost = Math.floor(Math.random() * 4) * 5;
    tierId1 = i*3 + 1;
    tierId2 = i*3 + 2;
    tierId3 = i*3 + 3;
    bundleData.push({
      bundleId : bundleId,
      tierId : tierId1,
      order: 1
    }, {
      bundleId : bundleId,
      tierId : tierId2,
      cost : cost,
      order: 2
    }, {
      bundleId : bundleId,
      tierId : tierId3,
      order: 3
    });
  }
  // console.log('bundleData', bundleData);
  return bundleData;
}

// tier
// 2 - 6 items for each
// each item should come from different segment

const seedTiers = () => {
  var tierId, itemId;
  var tierData = [];
  for (let i = 1; i <= 100; i++) {
    tierId = i;
    order = 1;
    itemId = Math.floor(Math.random() * 48) + 1;
    tierData.push ({
      tierId : tierId,
      itemId : itemId,
      order: order
    });
    order++;
    itemId = Math.floor(Math.random() * 48) + 49;
    tierData.push ({
      tierId : tierId,
      itemId : itemId,
      order: order
    });
    order++;
    if (Math.random() < .3 ) {
      itemId = Math.floor(Math.random() * 48) + 97;
      tierData.push ({
        tierId : tierId,
        itemId : itemId,
        order: order
      });
      order++;
    }
    if (Math.random() < .3 ) {
      itemId = Math.floor(Math.random() * 48) + 145;
      tierData.push ({
        tierId : tierId,
        itemId : itemId,
        order: order
      });
      order++;
    }
    if (Math.random() < .3 ) {
      itemId = Math.floor(Math.random() * 48) + 193;
      tierData.push ({
        tierId : tierId,
        itemId : itemId,
        order: order
      });
      order++;
    }
    if (Math.random() < .3 ) {
      itemId = Math.floor(Math.random() * 48) + 241;
      tierData.push ({
        tierId : tierId,
        itemId : itemId,
        order: order
      })
    }
  }
  return tierData;
}



module.exports = {
  seedBundle, seedTiers
};