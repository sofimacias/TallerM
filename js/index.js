$(document).ready(() => {
	console.log("JQuery cargado");

	$("#elemento-formulario").on("submit", (e) => {
		e.preventDefault();
		abrirFeedback();
		trasladarDatos();
	});

	$("#scrollto-form").on("click", () => {
		$("html, body").animate({
			scrollTop: $("#elemento-formulario").offset().top
		}, 2000);
	});

	$(".cerrar").click(() => {
    cerrarPopup();
  });

})

function abrirFeedback() {
  $(".popup-contenedor.formulario").addClass("oculto");
  $(".popup-contenedor.feedback").removeClass("oculto");
}

function cerrarPopup() {
  $(".popup-contenedor.formulario").addClass("oculto");
  $(".popup-contenedor.feedback").addClass("oculto");
}

function trasladarDatos() { 
	const inputNombreApellido = $("#nombre_apellido");
	const inputEmail = $("#email");
	const inputTelefono = $("#telefono");

	const nombreApellido = inputNombreApellido.val();
	const email = inputEmail.val();
	const telefono = inputTelefono.val();

	const spanNombre = $("#dato-nombre_apellido");
	const spanEmail = $("#dato-email");
	const spanTelefono = $("#dato-telefono");

	spanNombre.html(nombreApellido);
	spanEmail.html(email);
	spanTelefono.html(telefono);
}