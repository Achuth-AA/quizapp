import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import javax.persistence.*;
import java.util.List;

@SpringBootApplication
@RestController
public class SpringbootApplication {

  @PersistenceUnit
  private EntityManagerFactory emf;

  public static void main(String[] args) {
    SpringApplication.run(SpringbootApplication.class, args);
  }

  @PostMapping("/saveTask")
  public void saveTask(@RequestBody Task task) {
    EntityManager em = emf.createEntityManager();
    em.getTransaction().begin();
    em.persist(task);
    em.getTransaction().commit();
  }

  @GetMapping("/changeStatus")
  public void changeStatus(@RequestParam("id") String taskId) {
    EntityManager em = emf.createEntityManager();
    em.getTransaction().begin();
    Task task = em.find(Task.class, taskId);
    task.setTaskStatus("Completed");
    em.getTransaction().commit();
  }

  @GetMapping("/deleteTask")
  public void deleteTask(@RequestParam("id") String taskId) {
    EntityManager em = emf.createEntityManager();
    em.getTransaction().begin();
    Task task = em.find(Task.class, taskId);
    em.remove(task);
    em.getTransaction().commit();
  }

  @GetMapping("/allTasks")
  public List<Task> getAllTasks() {
    EntityManager em = emf.createEntityManager();
    Query query = em.createQuery("SELECT t FROM Task t");
    return query.getResultList();
  }

  @GetMapping("/getTask")
  public Task getTask(@RequestParam("id") String taskId) {
    EntityManager em = emf.createEntityManager();
    return em.find(Task.class, taskId);
  }
}

@Entity
class Task {

  @Id
  private String taskId;
  private String taskHolderName;
  private String taskDate;
  private String taskName;
  private String taskStatus;

  public String getTaskId() {
        return taskId;
    }

    public void setTaskId(String taskId) {
        this.taskId = taskId;
    }

    public String getTaskHolderName() {
        return taskHolderName;
    }

    public void setTaskHolderName(String taskHolderName) {
        this.taskHolderName = taskHolderName;
    }

    public String getTaskDate() {
        return taskDate;
    }

    public void setTaskDate(String taskDate) {
        this.taskDate = taskDate;
    }

    public String getTaskName() {
        return taskName;
    }

    public void setTaskName(String taskName) {
        this.taskName = taskName;
    }

    public String getTaskStatus() {
        return taskStatus;
    }

    public void setTaskStatus(String taskStatus) {
        this.taskStatus = taskStatus;
    }
}
