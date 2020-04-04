package buscacep.bo;

import java.io.IOException;

import buscacep.dao.BuscaCepDAO;

public class BuscaCepBO {

	private BuscaCepDAO cepDAO = new BuscaCepDAO();

	public BuscaCepBO() {
		
	}

	public String buscaCep(String cep) throws IOException {
		return cepDAO.getCep(cep);
	}
}
