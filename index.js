
function distanceFromHqInBlocks (value) {
    if (value > 42) {
      return value - 42;
    } else {
      return 42 - value;
    }
  }

  function distanceFromHqInFeet (value) {
    return distanceFromHqInBlocks(value) * 264;
  }

  function distanceTravelledInFeet (start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }

  function calculatesFarePrice (start, destination) {
    let travel = distanceTravelledInFeet(start, destination);

    if (travel <= 400) {
      return 0;
    } else if (travel > 400 && travel <= 2000) {
      return  ((travel - 400) *2 /100);
    } else if (travel > 2000 && travel < 2500) {
      return 25;
    } else {
      return 'cannot travel that far';
    }
  }