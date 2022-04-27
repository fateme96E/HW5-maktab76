function mostExpensive(jewelleryObj) {

    let jewellries = Object.keys(jewelleryObj);

    let expensiveJewellery = jewellries.reduce((maxKey, Key) => {
        maxKey = jewelleryObj[maxKey] > jewelleryObj[Key] ? maxKey : Key;
        return maxKey;
    },jewellries[0]);

  console.log(`The most expensive jewellery is ${expensiveJewellery}`);
}
mostExpensive({
  "Diamond Earrings": 980,
  "Gold Watch": 250,
  "Pearl Necklace": 4650,
});

mostExpensive({
  "Silver Bracelet": 280,
  "Gemstone Earrings": 180,
  "Diamond Ring": 3500,
});

mostExpensive({
    "Gemstone Earrings": 180,
  });
  
