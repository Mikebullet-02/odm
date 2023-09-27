<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Slider de Promociones</title>
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <link href="https://www.jqueryscript.net/css/jquerysctipttop.css" rel="stylesheet" type="text/css">
    <link rel="stylesheet" href="estilos2.css">
    <style type="text/css">
    .link {
        max-width: 270px !important;
        min-width: 260px !important;
    }

    .miniEtiqueta {
        font-weight: bold;
        color: gray;
        display: inline-block;
        font-size: 12px;
        background-color: #efefef;
        margin: 3px;
        text-transform: uppercase;
        border: solid 1px gray;
        border-radius: 5px;
        padding: 5px;
    }

    @media (max-width: 976px) {
        #mixedSlider .MS-content .item {
            width: 240px;
        }
    }
    </style>
</head>
<script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
<script src="js/multislider.js"></script>

<body style="background-color: #FFF; padding: 8px 0px 0px 0px;">




    <div width="100%" id="mixedSlider">
        <div class="MS-content">


            <!--  -->
        </div>

        <div class="MS-controls">
            <button class="MS-left"
                style="left: 3px;background-color: #094D30;color: white;border-radius: 100px;width: 40px;height: 40px;font-size: 25px;padding: 0px;"><i
                    class="fa fa-angle-left" aria-hidden="true"></i></button>
            <button class="MS-right"
                style="right: 2px;background-color: #094D30;color: white;border-radius: 100px;width: 40px;height: 40px;font-size: 25px;padding: 0px;"><i
                    class="fa fa-angle-right" aria-hidden="true"></i></button>
        </div>

    </div>



    <script type="text/javascript">
    /*     $('.MS-content').append(`<div class="MS-controls">
                        <button class="MS-left" style="left: 3px;background-color: #094D30;color: white;border-radius: 100px;width: 40px;height: 40px;font-size: 25px;padding: 0px;"><i class="fa fa-angle-left" aria-hidden="true"></i></button>
                        <button class="MS-right" style="right: 2px;background-color: #094D30;color: white;border-radius: 100px;width: 40px;height: 40px;font-size: 25px;padding: 0px;"><i class="fa fa-angle-right" aria-hidden="true"></i></button>
                    </div>`);*/

    let avisos = [{
        "img": "CEN_TIJ"
    }, {
        "img": "MEX_SAR"
    }, {
        "img": "CEN_TIJ2"
    }];


    for (var i = 0; i < avisos.length; i++) {

        let imagen = avisos[i].img;

        $('.MS-content').append(`
                    <div id="${ imagen }" class="item">    
                            <div class="imgTitle" style="cursor: pointer;">


                                <table border="0" width="100%" style="font-family:  Trebuchet, Trebuchet MS, Tahoma, Arial, sans-serif;font-size: 14px;background-color: #efefef;height:346px;padding: 5px;text-align: center;border-radius: 12px;">
                                        <tr>
                                            <td>
                                                <img style="border-radius: 8px;width: 200px;display: inline-table;" src="${ imagen }.png" >
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="text-align: center;">
                                                
                                                    <table border="0" style="width: 150px;display: inline-table;margin: 20px 0px;font-size: 14px;background-color: darkred;color: white;  border-radius: 8px">
                                                      <tbody><tr>
                                                        <td style="padding: 5px 0px;">VER MÁS</td>
                                                      </tr>
                                                      </tbody>
                                                    </table>

                                            </td>
                                        </tr>
                                    </table>                            

                            </div>
                        </div>

                    </div>

                    `);

        if ((i + 1) == avisos.length) {
            $('#mixedSlider').multislider({
                duration: 750,
                interval: 3000
            })
        }

    }
    </script>
    <script type="text/javascript">
    function verificaMarca(verifica) {

        let html = (verifica !== "") ? `<div class="miniEtiqueta">${ verifica }</div>` : ``;

        return html;

    }

    $('html').on('click', '.item', function(event) {
        event.preventDefault();
        let clave = $(this).attr('id');
        let variante = $(this).attr('variante');
        console.log("mandando: ", clave, variante);
        parent.buscaClave(clave, variante);

    });
    </script>
    <script>

    </script>
</body>

</html>