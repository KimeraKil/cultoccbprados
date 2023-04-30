<?php

include './config/conexao.php';

$hora = '8:00';
$cargahoraria = '8:20';

$funcionario1 = "Adilson";
$folga1 = "Segunda";

$resultado = date('H:i', strtotime('8 hour, 20 minute', strtotime($hora)));

$diasemana = array('Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado');
$Mdiasemana = array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab');
    
$diasemana_numero = date('w', time());

$diaW = $diasemana[$diasemana_numero];
$diaM = $Mdiasemana[$diasemana_numero];
$anoAtt = date('y');
$mesAtt = date('m'); // Mes Atual
$qtdeDias = date('t');//Dias do Mes Atual
$gt = '23-04-05';
$newDMA = date('t', strtotime('24-02-05'));

echo $qtdeDias;
echo '<br>';
echo $mesAtt;
echo '<br>';
echo 'Dias '.$newDMA;
/*
echo'
    <table>
    <tr id="dSemana">
        <td></td>
        <td></td>';
        $qtdeDias = date('t');//Dias do Mes Atual
        $mesAtt = date('m'); // Mes Atual
        for($i = 1; $i <= $qtdeDias; $i ++){
            $buscaData = date('Y-'.$mesAtt.'-'.$i.'');
            $diaSemanaAtt = date('w', strtotime($buscaData));
            echo'
                <td>'.$Mdiasemana[$diaSemanaAtt].'</td>
                ';
        }
        echo '
        </tr>
        <tr id="dDMes">
            <td></td>
            <td></td>
        ';
        for($i = 1; $i <= $qtdeDias; $i ++){
            $buscaData = date('Y-'.$mesAtt.'-'.$i.'');
            $diaSemanaAtt = date('w', strtotime($buscaData));
            echo'
                <td>'.$i.'</td>
                ';
        }
        echo'
        </tr>
            <tr id="dRotulo">
                <td>Colaborador</td>
                <td>Horario</td>
            </tr>
            <tr>';
            $sql = $pdo->query("SELECT * FROM funcionarios");
            foreach($sql->fetchAll()as $value){
                echo '
                <td class="dFunc">'.$value['nome'].'</td>
                <td class="dHour">'.$value['horario'].'</td>
            ';
            for($i = 1; $i <= $qtdeDias; $i ++){
                $buscaData = date('Y-'.$mesAtt.'-'.$i.'');
                $diaSemanaAtt = date('w', strtotime($buscaData));
                if($diasemana[$diaSemanaAtt] == $value['folgasemanal'] || $value['domingomensal'] == $i){
                    echo '<td style="background-color: #cccccccc;">DSR</td>';
                } else {
                    echo'<td></td>';
                }
            }
            echo '
            </tr>';
            }
            echo '</table>';

            */