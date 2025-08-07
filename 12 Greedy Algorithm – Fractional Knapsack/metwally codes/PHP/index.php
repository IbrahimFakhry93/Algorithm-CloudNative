<html>
  <head>
    <title>Knapsack</title>
  </head>
  <body>
    
<?php include 'sort.php';?>
<?php include 'knapsack.php';?>
<?php include 'prints.php';?>


<?php 
$values = array(4, 9, 12, 11, 6, 5);
$weights = array(1, 2, 10, 4, 3, 5);

$items = array();

$arrayLength = count($values);

for($i=0; $i < $arrayLength; $i++){
  $newItem = new Item($values[$i], $weights[$i], "#".$i);
  array_push($items, $newItem);
}

$items = merge_sort($items);

print_array($items);

$j=0;
$bag = new Knapsack(12);
while($bag->currentCapacity < $bag->maxCapacity)
  {
    $bag->add_item($items[$j]);
    $j++;
  }

print_items($bag);

?> 

  </body>
</html>