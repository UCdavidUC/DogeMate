angular.module('app', ['ngRoute', 'ngResource'])
    .factory('Especialistas', ['$resource', function($resource) {
        var e = $resource('/especialistas/:_id', null, {
            'update': { method: 'PUT' }
        });
        return e;
    }])
    .controller('RegistroController', ['$scope', 'Especialistas', '$window',function($scope, Especialistas, $window) {
        $scope.especialistas = Especialistas.query();
        
        // Email validation
        $('#email').keyup(function emailValidation() {
            var email = $("#email").val();
            var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if(regex.test(email)) {
                $('#emailAlert').html('Email válido.');
                $('#emailAlert').css('color', 'green');
            } else {
                $('#emailAlert').html('<strong>Error</strong>: Verifique que su correo electrónico esté escrito correctamente: ' + email);
                $('#emailAlert').css('color', 'red');
            }
        });

        // Password validation
        $('#contrasena').keyup(function passwordConforms() {
            var pwd = $('#contrasena').val();
            if (pwd.length < 8) {
                $('#passwordAlert').html('<strong>Error</strong>: La contaseña introducida debe contener al menos 8 caracteres.');
                $('#passwordAlert').css('color', 'red');
            } else if(pwd.length > 16) {
                $('#passwordAlert').html('<strong>Error</strong>: La contaseña introducida debe contener máximo 16 caracteres.');
                $('#passwordAlert').css('color', 'red');
            } else {
                $('#passwordAlert').html('Contraseña válida.');
                $('#passwordAlert').css('color', 'green');
            }
        });

        // Password match validation
        $('#confirmacion').keyup(function passwordValidation() {
            var pwd = $('#contrasena').val();
            var conf = $('#confirmacion').val();
            if(pwd===conf) {
                $('#passwordConfirmationAlert').html('Las contrase&ntilde;as coinciden.');
                $('#passwordConfirmationAlert').css('color', 'green');
            } else {
                $('#passwordConfirmationAlert').html('<strong>Error</strong>: Las contrase&ntilde;as no coinciden.');
                $('#passwordConfirmationAlert').css('color', 'red');
            }
        });

        // Number field validation
        $('#celular').keyup(function phoneValidation() {
            var celular = $('#celular').val();
            var regex = /^\d+$/;
            if($('#celular').val().match(regex) && celular.length === 10) {
                $('#celularAlert').html('Número de celular válido.');
                $('#celularAlert').css('color', 'green');
            } else {
                $('#celularAlert').html('<strong>Error</strong>: El número celular introducido no es válido.');
                $('#celularAlert').css('color', 'red');
            }
        });

        // Datepicker activation and setup
        $('#datepicker').datepicker({
            defaultDate: "-18y", 
            navigationAsDateFormat: true, 
            changeYear: true
        });

        // Image file validation
        $('#fotografia').change(function() {
            var image = $('#fotografia').val();
            var type = image.replace(/^.*\./, '');
            var ValidImageTypes = ["gif", "jpeg", "png", "jpg"];
            if($.inArray(type, ValidImageTypes) < 0) {
                $('#fotografiaAlert').html('<strong>Error</strong>: Error, la imágen no es válida.');
                $('#fotografiaAlert').css('color', 'red');
            } else {
                $('#fotografiaAlert').html('Fotografía válida.');
                $('#fotografiaAlert').css('color', 'green');
                preview(this);
            }
        });

        // Specialist photo preview
        function preview(input) {
            if(input.files && input.files[0]) {
                var reader = new FileReader();
                reader.onload = function(e) {
                    $('#photoPreview').attr('src', e.target.result);
                }
                reader.readAsDataURL(input.files[0]);
            } else {
                console.log('Error: Couldn\'t load picture..');
            }
        }
        
        // Save specialist into Mongo
        $scope.save = function(nuevoEspecialista) {
            var email = $scope.nuevoEspecialista.email;
            var contrasena = $scope.nuevoEspecialista.contrasena;
            console.log('Email: ' + email);
            if(!$scope.nuevoEspecialista || $scope.nuevoEspecialista.length < 1) {
                console.log('Please introduce specialista variables..');
                return;
            }
            console.log('Creating specialist...');
            var especialista = new Especialistas({
                _id         : nuevoEspecialista.email,
                contrasena  : nuevoEspecialista.contrasena,
                nombre      : nuevoEspecialista.nombre,
                apellido_p  : nuevoEspecialista.apellido_p,
                apellido_m  : nuevoEspecialista.apellido_m,
                fecha_nac   : nuevoEspecialista.fecha_nac,
                celular     : nuevoEspecialista.celular,
                peso        : nuevoEspecialista.peso,
                estatura    : nuevoEspecialista.estatura,
                fotografia  : nuevoEspecialista.fotografia
            });
            var respuesta = especialista.$save(function() {
                $scope.especialistas.push(especialista);
                $scope.newEspecialista = '';
            });
            console.log(respuesta);
            if(respuesta === 'Hola') {
                $window.location.href = '/dashboard';
            }
        }
        
    }])
    .controller('LoginController', ['$scope', '$routeParams', 'Especialistas', '$location', '$window', function($scope, $routeParams, Especialistas, $location, $window) {
        // Controlador para solicitar un especialista basado en el id.        
        $scope.especialistas = Especialistas.query();
        /*
        $scope.especialista = Especialistas.get({
            email: $routeParams.email
        });*/
        console.log('Aqui');
        $scope.find = function() {
            Especialistas.query({
                email: $scope.especialista._email
                /*contrasena: $scope.especialista.password*/
            }, $scope.especialista, function() {
                $location.url('/');
                $window.location.href = '/paseos';
                console.log('buscando especialista...');
            });
        };
    }])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/registro', {
            templateUrl: '/registro.html',
            controller: 'RegistroController'
        }).when('/', {
            templateUrl: '/login.html',
            controller: 'LoginController'
        });
    }]);