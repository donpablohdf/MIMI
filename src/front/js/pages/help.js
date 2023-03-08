import React, {useContext, useEffect } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/help.css";
import fondo from "../../img/fondo.jpg"
import hoguera from "../../img/grupohoguera.jpg"
import duda from "../../img/duda.jpg"

export const Help = () => {
	const { actions } = useContext(Context);
	const token = localStorage.getItem("jwt-token");
	useEffect(() => {
		if (token) {
		  actions.logIn();
		}
		
	  }, []);
	return (
		<div className= "help_body" style={{backgroundImage: `url(${fondo})`}}>
			<div className= "container">
				<h1 className="rotulo_principal">NOS ENCANTAN LAS</h1>
				<h1 className="rotulo_principal mb-5"><span className="experiencias">NUEVAS EXPERIENCIAS...</span></h1>
				<img className="fotoHoguera" src={hoguera}/>
				<h2 className="rotulo_secundario my-5">...PERO SIEMPRE SURGEN <span className="dudas">DUDAS</span></h2>
				<img className="rounded mx-auto d-block" src={duda}/>
				<h2 className="usuario_cabecera my-5"> SI ERES <span className="usuario">USUARIO</span></h2>
				<div className="texto_usuario">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero nisl, pretium auctor mauris sed, tincidunt tincidunt nunc. Sed feugiat ante at justo placerat, maximus efficitur mi vestibulum. In felis ligula, pellentesque vitae pulvinar ac, elementum et mi. Nullam et sapien ex. Vivamus ornare tincidunt ex a condimentum. Nunc non massa sit amet odio auctor ullamcorper quis a justo. Praesent ac justo et mauris aliquam venenatis vitae iaculis nibh. Aliquam id elementum mi. Nam nec eros lorem. Morbi mattis lectus ac purus dapibus tincidunt.</p>
					<p>Praesent eget egestas lorem. Cras ut pulvinar nunc. Suspendisse scelerisque venenatis risus, in accumsan tellus mollis sed. Nam volutpat, diam sit amet placerat laoreet, ligula risus rhoncus tellus, quis fermentum felis ante ut erat. Sed non tellus efficitur, finibus est in, tristique sapien. Etiam molestie ac odio ac tincidunt. Sed dolor purus, efficitur eget justo in, lobortis hendrerit nunc. Fusce in augue vel mauris scelerisque volutpat et in erat. Integer a magna vitae justo mollis euismod. Sed ante arcu, malesuada imperdiet nunc sit amet, facilisis rutrum lacus. Fusce sed erat quis libero aliquet vulputate. Ut imperdiet placerat tellus id placerat. Aenean semper fermentum lectus, eget ultrices magna auctor sed. Cras in sapien tempus, pretium justo mattis, consectetur neque.</p>
					<p>Mauris nec nisi ac diam pulvinar pellentesque nec vitae tortor. Aliquam erat volutpat. Aenean ut nibh porta nisl semper fringilla ac in urna. Maecenas vel ante rhoncus, ultrices elit id, posuere ipsum. Ut lacus mauris, pulvinar sit amet risus at, laoreet scelerisque mauris. Nam quam justo, feugiat id sapien non, gravida volutpat urna. Donec malesuada tellus vel egestas interdum. Nulla sit amet turpis nunc. Sed commodo vehicula erat, a viverra massa porta id. Proin porttitor enim sit amet elit ornare, sit amet tempor elit facilisis. Nunc accumsan, orci ut eleifend efficitur, mauris urna accumsan augue, sed consequat odio arcu non libero. Praesent tortor diam, bibendum id convallis ut, facilisis vitae justo. Vivamus quis dui erat.</p>
					<p>Nam molestie scelerisque arcu posuere facilisis. Aenean ac justo in lorem pulvinar eleifend. Aenean dui magna, accumsan quis porttitor id, condimentum nec mi. Morbi sagittis sem id ante venenatis, id maximus nisi mollis. Suspendisse in faucibus eros, eget auctor dolor. Vestibulum dapibus sapien a ante malesuada, ac pulvinar magna vestibulum. Vestibulum congue tristique eros, nec congue metus consectetur id. Duis bibendum enim et lectus tincidunt bibendum. Ut at ipsum nunc. Cras erat neque, consequat a tincidunt a, mollis id leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec commodo accumsan enim sit amet bibendum. Nullam eget augue et eros volutpat commodo fermentum at lectus. Donec ultricies suscipit egestas. Duis at metus sollicitudin lectus faucibus accumsan. Sed nibh velit, tincidunt ut luctus a, gravida quis ipsum.</p>
					<p>Mauris gravida enim dolor, ut tincidunt massa fringilla quis. Aliquam tortor dolor, vestibulum quis fermentum ac, rhoncus eget erat. Mauris a quam tempus, iaculis nisi tempus, accumsan ante. Donec vel posuere nibh, sit amet vehicula quam. Suspendisse facilisis neque a scelerisque facilisis. Aliquam id ante finibus, malesuada lacus nec, auctor massa. Quisque id nibh nisl. Proin ut lobortis purus. Nullam ac lacus porttitor, iaculis sem et, sollicitudin ipsum. Quisque ac magna velit. Suspendisse tristique nulla id turpis porttitor fermentum. Quisque porttitor dui lacus, dapibus maximus enim ornare at. Quisque efficitur auctor ultrices. Aliquam ut molestie tortor. Pellentesque rutrum eleifend purus vitae rutrum. Nullam placerat magna vel nulla porttitor, vel viverra arcu euismod.</p>
				</div>
				<h2 className="usuario_cabecera my-5"> SI ERES <span className="usuario">GUIA</span></h2>
				<div className="texto_usuario pb-5">
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer libero nisl, pretium auctor mauris sed, tincidunt tincidunt nunc. Sed feugiat ante at justo placerat, maximus efficitur mi vestibulum. In felis ligula, pellentesque vitae pulvinar ac, elementum et mi. Nullam et sapien ex. Vivamus ornare tincidunt ex a condimentum. Nunc non massa sit amet odio auctor ullamcorper quis a justo. Praesent ac justo et mauris aliquam venenatis vitae iaculis nibh. Aliquam id elementum mi. Nam nec eros lorem. Morbi mattis lectus ac purus dapibus tincidunt.</p>
					<p>Praesent eget egestas lorem. Cras ut pulvinar nunc. Suspendisse scelerisque venenatis risus, in accumsan tellus mollis sed. Nam volutpat, diam sit amet placerat laoreet, ligula risus rhoncus tellus, quis fermentum felis ante ut erat. Sed non tellus efficitur, finibus est in, tristique sapien. Etiam molestie ac odio ac tincidunt. Sed dolor purus, efficitur eget justo in, lobortis hendrerit nunc. Fusce in augue vel mauris scelerisque volutpat et in erat. Integer a magna vitae justo mollis euismod. Sed ante arcu, malesuada imperdiet nunc sit amet, facilisis rutrum lacus. Fusce sed erat quis libero aliquet vulputate. Ut imperdiet placerat tellus id placerat. Aenean semper fermentum lectus, eget ultrices magna auctor sed. Cras in sapien tempus, pretium justo mattis, consectetur neque.</p>
					<p>Mauris nec nisi ac diam pulvinar pellentesque nec vitae tortor. Aliquam erat volutpat. Aenean ut nibh porta nisl semper fringilla ac in urna. Maecenas vel ante rhoncus, ultrices elit id, posuere ipsum. Ut lacus mauris, pulvinar sit amet risus at, laoreet scelerisque mauris. Nam quam justo, feugiat id sapien non, gravida volutpat urna. Donec malesuada tellus vel egestas interdum. Nulla sit amet turpis nunc. Sed commodo vehicula erat, a viverra massa porta id. Proin porttitor enim sit amet elit ornare, sit amet tempor elit facilisis. Nunc accumsan, orci ut eleifend efficitur, mauris urna accumsan augue, sed consequat odio arcu non libero. Praesent tortor diam, bibendum id convallis ut, facilisis vitae justo. Vivamus quis dui erat.</p>
					<p>Nam molestie scelerisque arcu posuere facilisis. Aenean ac justo in lorem pulvinar eleifend. Aenean dui magna, accumsan quis porttitor id, condimentum nec mi. Morbi sagittis sem id ante venenatis, id maximus nisi mollis. Suspendisse in faucibus eros, eget auctor dolor. Vestibulum dapibus sapien a ante malesuada, ac pulvinar magna vestibulum. Vestibulum congue tristique eros, nec congue metus consectetur id. Duis bibendum enim et lectus tincidunt bibendum. Ut at ipsum nunc. Cras erat neque, consequat a tincidunt a, mollis id leo. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec commodo accumsan enim sit amet bibendum. Nullam eget augue et eros volutpat commodo fermentum at lectus. Donec ultricies suscipit egestas. Duis at metus sollicitudin lectus faucibus accumsan. Sed nibh velit, tincidunt ut luctus a, gravida quis ipsum.</p>
					<p>Mauris gravida enim dolor, ut tincidunt massa fringilla quis. Aliquam tortor dolor, vestibulum quis fermentum ac, rhoncus eget erat. Mauris a quam tempus, iaculis nisi tempus, accumsan ante. Donec vel posuere nibh, sit amet vehicula quam. Suspendisse facilisis neque a scelerisque facilisis. Aliquam id ante finibus, malesuada lacus nec, auctor massa. Quisque id nibh nisl. Proin ut lobortis purus. Nullam ac lacus porttitor, iaculis sem et, sollicitudin ipsum. Quisque ac magna velit. Suspendisse tristique nulla id turpis porttitor fermentum. Quisque porttitor dui lacus, dapibus maximus enim ornare at. Quisque efficitur auctor ultrices. Aliquam ut molestie tortor. Pellentesque rutrum eleifend purus vitae rutrum. Nullam placerat magna vel nulla porttitor, vel viverra arcu euismod.</p>
				</div>
			</div>
		</div>
	);
};