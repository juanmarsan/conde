<?php
header('Access-Control-Allow-Origin: *');



	$res = mysql_query($sql, $con);

	$vacio=true;
	$i=0;
		while($row=mysql_fetch_assoc($res)){
			$jsonarray[$i]['id'] = $row['id'];
			$jsonarray[$i]['title'] = utf8_encode($row['nombre']);
			$jsonarray[$I]['idvariedad'] = utf8_encode($row['idvariedad']);
			$jsonarray[$i]['variedad'] = utf8_encode($row['variedad']);
			$jsonarray[$i]['description'] = utf8_encode($row['descripcion']);
			$jsonarray[$I]['photo'] = utf8_encode($row['foto']);
			$i++;
			$vacio=false;
		}


	if($vacio==true){
		$jsonarray[$i]['resultat'] = false;
		echo json_encode($jsonarray);
	}else{
		echo json_encode($jsonarray);
	}

?>
