package buscacep.app;

import java.util.HashSet;
import java.util.Set;

import javax.ws.rs.ApplicationPath;
import javax.ws.rs.core.Application;

import buscacep.rest.BuscaCepResource;

@ApplicationPath("/ws")
public class buscacepApplication extends Application {

	
	public Set<Class<?>> getClasses() {
		Set<Class<?>> classes = new HashSet<Class<?>>();

		classes.add(BuscaCepResource.class);
     	
		return classes;
	}
}