package com.res;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.transaction.annotation.EnableTransactionManagement;
<<<<<<< HEAD
=======


>>>>>>> branch 'master' of https://github.com/HaloFaction/RMS

@SpringBootApplication
<<<<<<< HEAD
@ComponentScan("com.res")
@MapperScan("com.res.model.mapper")
=======
@ComponentScan(basePackages="com.res")
>>>>>>> branch 'master' of https://github.com/HaloFaction/RMS
@EnableTransactionManagement
public class RmsApplication {

	public static void main(String[] args) {
		SpringApplication.run(RmsApplication.class, args);
	}

}
