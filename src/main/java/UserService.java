import com.example.weback.app.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

//Acciones que utilizan el UserRepository pero no interactua directamente con la base de datos
@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private BCryptPasswordEncoder passwordEncoder;

    //Encripta la contraseña del usuario antes de guardarla
    public User saveUser(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }

    //Encontrar usuario por email
    public Optional<User> findByEmail(String email) {
        return userRepository.findByEmail(email);
    }
}
