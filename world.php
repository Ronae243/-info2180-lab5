<?php
    header('Access-Control-Allow-Origin: *');
?>

<?php
$host = 'localhost';
$username = 'lab5_user';
$password = 'password123';
$dbname = 'world';
$country = (isset ($_GET['country']) ==TRUE) ? $_GET['country']:"";
$cities = (isset($_GET['context'] )==TRUE) ? $_GET['context']: "";

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);

$userent = $conn->query("SELECT * FROM countries WHERE name LIKE '%$country%'");
$userent_citiesby_country= $conn->query("SELECT cities.name, cities.district, cities.population FROM cities Join countries ON cities.country_code = countries.code WHERE countries.name LIKE '%$cities%'");


$results = $userent->fetchAll(PDO::FETCH_ASSOC);
$results_c_c = $userent_citiesby_country->fetchAll(PDO::FETCH_ASSOC);
?>


<?php 
$state = "false";
if (isset($_GET['country'])){
    $state = "true";  
}
?>

<?php if ($state == "true"): ?>
 <table>
   <thead>
     <tr>
         <th scope="col"><?= "Name" ?></th>
         <th scope="col"><?= "Continent"?></th>
         <th scope="col"><?= "Independence" ?></th>
         <th scope="col"><?= "Head of State" ?></th>
     </tr>
   </thead>
   <tbody>
     <?php foreach ($results as $row): ?>
       <tr>
         <td><?= $row['name']; ?></td> 
         <td><?= $row['continent']; ?></td> 
         <td><?= $row['independence_year']; ?></td>  
         <td><?= $row['head_of_state']; ?></td>
       </tr>
     <?php endforeach; ?>
   </tbody>
 </table>
<?php endif; ?>

<?php if ($state == "false"): ?>
  <table>
   <thead>
     <tr1>
         <th scope="col"><?= "Name" ?></th>
         <th scope="col"><?= "District"?></th>
         <th scope="col"><?= "Population" ?></th>
     </tr1>
   </thead>
   <tbody>
     <?php foreach ($results_c_c as $ow): ?>
       <tr>
         <td><?= $ow['name']; ?></td> 
         <td><?= $ow['district']; ?></td> 
         <td><?= $ow['population']; ?></td>  
       </tr>
     <?php endforeach; ?>
   </tbody>
 </table>
<?php endif; ?>





