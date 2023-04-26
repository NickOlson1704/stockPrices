function best(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    
    for (let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      } else if (prices[i] - minPrice > maxProfit) {
        maxProfit = prices[i] - minPrice;
      }
    }
    
    return maxProfit;
  }
  
  
  const prices = [15, 10, 20, 22, 1, 9];
  const maxProfit = best(prices);
  console.log(maxProfit); 
  
  
  
  
  
  
  
  