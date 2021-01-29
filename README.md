

# Design Patterns

![Design Patterns](./design-patterns.svg)
## 创建模式 Creational Patterns

* 单例模式 Singleton [ˈsɪŋɡltən] 保证一个类仅有一个实例。
* 工厂模式 Factory  [ˈfæktri] 让其子类自己决定实例化哪一个工厂类。 
* 抽象工厂模式 Abstract Factory [ˈæbstrækt] [ˈfæktri] 创建一系列相关或相互依赖对象的接口，而无需指定它们具体的类。
* 建造者模式 Builder [ˈbɪldə(r)] 使用多个简单的对象一步一步构建成一个复杂的对象。
* 原型模式 Prototype [ˈprəʊtətaɪp] 用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。
  
## 结构模式 Structural Patterns

* 适配器模式 Adapter  
* 桥接模式 Bridge   
* 组合模式 Composite
* 装饰模式 Decorator
* 外观模式 Facade   
* 享元模式 Flyweight 
* 代理模式 Proxy 
## 行为模式 Behavioral Patterns

* 职责链模式 Chain Of Responsibility [tʃeɪn] [əv] [rɪˌspɒnsəˈbɪləti] 将多个对象连接成一条链，沿着这条链传递请求，并处理该请求。
* 命令模式 Command [kəˈmɑːnd] 将一个请求封装成一个对象，从而使您可以用不同的请求对客户进行参数化。
* 解释器模式 Interpreter [ɪnˈtɜːprətə(r)] 实现了一个表达式接口，该接口解释一个特定的上下文。
* 迭代器模式 Iterator [ɪtə'reɪtə] 提供一种方法顺序访问一个聚合对象中各个元素, 而又无须暴露该对象的内部表示。
* 中介者模式 Mediator [ˈmiːdieɪtə(r)] 提供了一个中介类处理不同类之间的通信，从而使其耦合松散。
* 备忘录模式 Memento [məˈmentəʊ] 保存一个对象的某个状态，以便在适当的时候恢复对象。
* 观察者模式 Observer [əbˈzɜːvə(r)] 当一个对象被修改时，则会自动通知依赖它的对象。
* 状态模式 State  [steɪt] 允许对象在内部状态发生改变时改变它的行为。
* 策略模式 Strategy [ˈstrætədʒi] 定义一系列的算法，把它们一个个封装起来，并且使它们可以相互替换。  
* 模板模式 Template [ˈtempleɪt] 一个抽象类公开定义了执行它的方法的方式/模板。它的子类可以按需要重写方法实现，但调用将以抽象类中定义的方式进行。     
* 访问者模式 Visitor [ˈvɪzɪtə(r)] 通过将方法的层次结构移动到一个对象中，将算法与对象结构分离。