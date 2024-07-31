import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

//Acceso a las acciones del usuario (CRUD y consultas)
//Acceso directo con la base de datos
//Al extender de JPA los metodos para guardar, actualizar, eliminar y añadir ya están incluidos
public interface UserRepository extends JpaRepository<User, Long> {

    //Encontrar usuario por email
    Optional<User> findByEmail(String email);
}
