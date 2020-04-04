package buscacep.rest;

import java.io.IOException;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.core.Response;

import buscacep.bo.BuscaCepBO;
import buscacep.dao.BuscaCepDAO;

@Path("/api")
public class BuscaCepResource {

	BuscaCepBO cepBO = new BuscaCepBO();

	@GET
	@Path("/getcep/{cep}")
	public Response getCep(@PathParam("cep") String cep) throws IOException {

		return Response.ok("200").entity(cepBO.buscaCep(cep)).header("Access-Control-Allow-Origin", "*")
				.header("Access-Control-Allow-Headers", "origin, content-type, accept, authorization")
				.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD")
				.header("Access-Control-Max-Age", "2000").build();
	}
}
