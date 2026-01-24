# 📚 The Ultimate Project Encyclopedia

**Author**: Mamdouh Attia  
**Scope**: A comprehensive technical reference for all academic, freelance, and personal projects.  
**Last Updated**: January 2026

---

## 📑 Domain Index

### 🧠 Big Data & Artificial Intelligence
1.  [US Accidents Analysis (Spark/ML)](#1-us-accidents-analysis)
2.  [vPredicto (Video Frame Prediction)](#2-vpredicto)
3.  [Phishing Detection (ML)](#3-phishing-detection)
4.  [Vectorized Database (K-Means)](#4-vectorized-database)
5.  [Arabic NLP Diacritization](#5-arabic-nlp-diacritization)
6.  [Premiere League Analyzer](#6-premiere-league-analyzer)

### 📱 Mobile & Web Development
7.  [EPL Ticket Reservation (flutter/.NET)](#7-epl-ticket-reservation)
8.  [EcoSort (Smart Recycling)](#8-ecosort)
9.  [TapCash (FinTech Dashboard)](#9-tapcash)
10. [Search Engine (Java/Web)](#10-search-engine)
11. [Central Library System (SQL)](#11-central-library-system)

### 🤖 Embedded Systems, Robotics & Hardware
12. [Multi-Robot Exploration (ROS)](#12-multi-robot-exploration-ros)
13. [Embedded Line Follower (Android/OpenCV)](#13-embedded-line-follower)
14. [MIPS 5-Stage Processor (Verilog)](#14-mips-processor)
15. [SPI Protocol Master/Slave (Verilog)](#15-spi-protocol)
16. [Parallel Map Reduce (CUDA)](#16-parallel-map-reduce-cuda)

### 💻 Software Engineering & Algorithms
17. [Circuits Solver (C++/Eigen)](#17-circuits-solver)
18. [Logic Simulator (C++/OOP)](#18-logic-simulator)
19. [OS Scheduler (Linux IPC)](#19-os-scheduler)
20. [Mars Exploration Simulation](#20-mars-exploration)
21. [Regular Expression to DFA](#21-regex-to-dfa)

---

# 🧠 Big Data & Artificial Intelligence

## 1. US Accidents Analysis
**Type**: Big Data Course Project  
**Tech**: PySpark, MapReduce, Mage, Terraform, GCP  
**My Contribution**: Data Science Lead (Spark ML, EDA, Custom MapReduce)

### 📝 Overview
An end-to-end Big Data pipeline analyzing **7.7 million** US traffic accident records to predict severity and identify risk factors. The system uses distributed computing (PySpark) and modern cloud orchestration (Mage, GCP) to process massive datasets.

### 🧠 Technical Deep Dive
-   **MapReduce Linear Regression** (My Implementation):
    ```python
    # Manual coefficient calculation via MapReduce
    rdd_xy = rdd.map(lambda row: (row.x * row.y, row.x**2, row.x, row.y))
    sum_xy, sum_xx, sum_x, sum_y = rdd_xy.reduce(
        lambda a, b: (a[0]+b[0], a[1]+b[1], a[2]+b[2], a[3]+b[3])
    )
    n = rdd.count()
    beta = (n*sum_xy - sum_x*sum_y) / (n*sum_xx - sum_x**2)
    alpha = (sum_y - beta*sum_x) / n
    ```
-   **Pipeline Architecture**:
    1.  Kaggle API → Mage Ingestion
    2.  Raw CSV → GCS Buckets (partitioned by state)
    3.  Mage ETL → BigQuery (nested schema optimization)
    4.  DBT → Star Schema (Fact: Accidents, Dims: Location, Weather, Time)
    5.  PySpark → ML Training (distributed across 4 worker nodes)
    6.  Looker Studio → Interactive Dashboards
-   **EDA Insights** (My Contribution):
    -   **Weather Impact**: Accidents ↑50% in rain/snow vs clear conditions
    -   **Rush Hour Peaks**: 7-9 AM and 4-6 PM account for 68% of severe accidents
    -   **State Correlation**: CA, TX, FL have highest accident density (population-adjusted)
-   **Feature Engineering**:
    -   Time-based: Hour, Day of Week, IsRushHour, IsWeekend
    -   Geospatial: Distance to nearest city center (Haversine formula)
    -   Weather encoding: One-hot encoding of 12 condition categories
-   **Model Performance**:
    | Model | Accuracy | Precision | Recall | F1-Score |
    |-------|----------|-----------|--------|----------|
    | Random Forest | **84%** | 82% | 85% | 0.83 |
    | XGBoost | 82% | 80% | 83% | 0.81 |
    | Logistic Reg | 76% | 74% | 77% | 0.75 |

### 💻 My Specific Contributions
-   **Team Role**: Data Science Lead (2 out of 4 team members)
-   **Responsibilities**:
    -   Designed and implemented MapReduce Linear Regression from scratch
    -   Led EDA phase: 80+ hours of data cleaning and correlation analysis
    -   Configured Mage orchestration on GCP (10+ ETL pipelines)
    -   Trained and evaluated 3 ML models, selected Random Forest as champion
-   **Key Achievement**: Reduced data processing time from 6 hours (Pandas) to **23 minutes** (PySpark on 4-node cluster)

---

## 2. vPredicto
**Type**: Graduation Project (Grade: A+)  
**Tech**: Python, PyTorch, OpenCV, Docker  
**My Contribution**: Lead Researcher & Library Architect

### 📝 Overview
A unified open-source library that implements state-of-the-art Video Frame Prediction models (PredRNN++, MIM, CausalLSTM) under a single, easy-to-use API.

### 🧠 Technical Deep Dive
-   **Architecture**: Designed a `BaseModel` abstract class that all 6 models inherit from:
    ```python
    class BaseModel(nn.Module):
        def forward(self, x, pred_frames=10):
            """Standardized I/O: (B,T,C,H,W) → (B,T_out,C,H,W)"""
            pass
        def train_model(self, loader, lr, epochs, device):
            pass
    ```
-   **PredRNN++ Implementation**:
    -   **CausalLSTM Cell**: Modified LSTM with spatiotemporal memory flow
    -   **GHU (Gradient Highway Unit)**: Creates gradient shortcuts across layers to train deep (>10 layer) networks
    -   **Zigzag Memory**: Information propagates both horizontally (time) and vertically (layers)
-   **Memory In Memory (MIM)**: Implements differential memory tracking:
    -   Tracks not just velocity (1st derivative) but acceleration (2nd derivative) of patterns
    -   Uses nested memory cells to model higher-order dynamics
-   **Custom Dataloaders**: Implemented efficient data pipeline:
    ```python
    class MovingMNISTLoader(Dataset):
        def __getitem__(self, idx):
            seq = self.data[idx].float().unsqueeze(1)  # Add channel dim
            input_seq = seq[:10]  # First 10 frames
            target_seq = seq[10:]  # Next 10 frames
            return input_seq, target_seq
    ```
-   **Performance**: PredRNN++ achieved **SSIM: 0.8734**, **PSNR: 28.45 dB** on MovingMNIST (on par with published results)

---

## 3. Phishing Detection
**Type**: ML Course Project  
**Tech**: Scikit-learn, Pandas  
**My Contribution**: ML Engineer (Model Tuning)

### 📝 Overview
A machine learning system that classifies websites as legitimate or phishing based on URL characteristics and page structure analysis, achieving 96% accuracy.

### 🧠 Technical Deep Dive
-   **Feature Engineering**: Extracted 30+ features including:
    -   URL length, number of special characters (`@`, `-`, `_`)
    -   HTTPS presence, domain age (via WHOIS)
    -   DNS record validation
    -   Page rank and subdomain depth
-   **Model Comparison**:
    -   Logistic Regression: 89% accuracy (fast, interpretable)
    -   Decision Tree: 91% (overfitting risk)
    -   **Random Forest**: **96% accuracy** (ensemble of 100 trees)
-   **Hyperparameter Tuning**: GridSearchCV to optimize `max_depth`, `n_estimators`, `min_samples_split`
-   **Class Imbalance**: Used SMOTE (Synthetic Minority Over-sampling) to balance phishing vs legitimate samples

### 💻 Code Snippet (Feature Extraction)
```python
def extract_url_features(url):
    features = {}
    features['url_length'] = len(url)
    features['num_digits'] = sum(c.isdigit() for c in url)
    features['num_dots'] = url.count('.')
    features['https'] = 1 if url.startswith('https') else 0
    features['has_ip'] = 1 if re.match(r'\d+\.\d+\.\d+\.\d+', url) else 0
    return features
```

---

## 4. Vectorized Database
**Type**: Database Systems Project  
**Tech**: Python, NumPy, K-Means Clustering  
**My Contribution**: Implementation

### 📝 Overview
A custom-built vector database implementation from scratch, demonstrating how similarity search works under the hood.

### 🧠 Technical Deep Dive
-   **Indexing**: Uses **K-Means Clustering** to partition vectors into centroids.
-   **Retrieval**:
    1.  Compare query vector vs. Centroids (Coarse Quantization).
    2.  Select top $M$ closest clusters.
    3.  Scan vectors *only* within those clusters (Fine Quantization).
-   **Storage**: Serializes clusters and centroids to disk CSVs for persistence.

### 💻 Code Snippet (Indexing Logic)
```python
def cluster_data(self, rows):
    kmeans = KMeans(n_clusters=self.num_clusters(len(rows))).fit(rows)
    centroids = kmeans.cluster_centers_
    self.save_clusters(rows, kmeans.labels_, centroids)
```

---

# 📱 Mobile & Web Development

## 7. EPL Ticket Reservation
**Type**: Web/Mobile App System  
**Tech**: Flutter (Web), ASP.NET Core, SQL Server  
**My Contribution**: Flutter Frontend Developer (Web Admin Dashboard)

### 📝 Overview
A comprehensive system for booking English Premier League match tickets. It features a public-facing app for users and an administrative dashboard.

### 🧠 Technical Deep Dive
-   **Provider State Management** (700+ lines of implementation):
    ```dart
    class MatchProvider extends ChangeNotifier {
        Future<void> loadMatches() async {
            _isLoading = true;
            notifyListeners();  // Reactive UI update
            final response = await _apiService.get('/api/matches');
            _matches = response.data.map((j) => Match.fromJson(j)).toList();
            notifyListeners();
        }
    }
    ```
-   **JWT Auto-Refresh**: Implemented token interceptor that refreshes expired tokens mid-request
-   **Data Pagination**: Custom `PaginatedDataTable` for 1000+ match rows (50 per page)
-   **Charts Integration**: Used `fl_chart` for revenue LineChart, occupancy BarChart
-   **Form Validation**: Reusable `ValidatedTextField` widget with real-time error display
-   **Challenges Solved**:
    -   Web-specific rendering issues → Used `--web-renderer canvaskit`
    -   Race condition on seat booking → Optimistic locking + UI refresh
    -   Bundle size (28MB) → Lazy loading reduced to 18MB

---

## 8. EcoSort
**Type**: Freelance Client Project  
**Tech**: Flutter, Firebase, IoT (Blync)  
**My Contribution**: Mobile App Developer (IoT Integration)

### 📝 Overview
A freelance project where I integrated critical IoT features into an existing smart recycling gamification app, connecting mobile users to smart bins via Bluetooth Low Energy.

### 🧠 Technical Deep Dive
-   **Blync IoT Integration** (My Core Contribution):
    -   **BLE Protocol**: Reverse-engineered the Blync smart bin's Bluetooth LE communication protocol
    -   **Service UUID Discovery**: Used `flutter_blue_plus` to scan for `0x180A` (Device Information Service)
    -   **Characteristic Read/Write**: Implemented bi-directional communication:
        ```dart
        // Read bin fill level
        await characteristic.read(); // Returns [0x00-0x64] (0-100%)
        // Write user ID for point attribution
        await characteristic.write([userId.bytes]);
        ```
-   **QR Code Security System**:
    -   Each bin has unique QR code with HMAC-SHA256 signature
    -   App validates signature server-side to prevent fake bin scanning
    -   **Anti-Fraud**: Rate limiting (max 5 scans/hour per user)
-   **Points Algorithm**:
    ```dart
    points = base_points * category_multiplier * streak_bonus
    // Plastic: 10pts, Glass: 15pts, E-Waste: 25pts
    // Streak: +10% for 7-day consecutive recycling
    ```
-   **Firebase Custom Claims** (Privacy/RBAC):
    -   Implemented role-based access: `user`, `host` (bin owner), `admin`
    -   Custom claim injection on registration:
        ```js
        admin.auth().setCustomUserClaims(uid, {role: 'user', verified: false});
        ```

### 💻 My Specific Contributions
-   **Hired For**: Critical feature additions to existing codebase (100+ hours contract)
-   **Deliverables**:
    1.  Blync smart bin Bluetooth integration (0 to production-ready in 3 weeks)
    2.  QR security system with server-side validation
    3.  Role-based access control using Firebase custom claims
    4.  Comprehensive testing suite (unit + integration tests)
-   **Client Impact**: Enabled monetization via partnered bin network (50+ bins deployed post-launch)

---

## 9. TapCash
**Type**: FinTech Mobile App  
**Tech**: Flutter, Dart  
**My Contribution**: UI Developer (Dashboard & Visualization)

### 📝 Overview
A modern financial management app interface.

### 🧠 Technical Deep Dive
-   **Data Visualization**: Integrated charting libraries to render spending "Insights" graphs.
-   **Widget Architecture**: Built reusable card widgets and a custom bottom navigation bar for a premium feel.

---

## 10. Search Engine
**Type**: Information Retrieval Project  
**Tech**: Java, Apache Tomcat, HTML/CSS  
**My Contribution**: Backend (Web Crawler)

### 📝 Overview
A distributed search engine built from scratch, implementing the core components of Google's architecture: web crawling, indexing, and ranked retrieval.

### 🧠 Technical Deep Dive
-   **My Contribution: Web Crawler Module**:
    -   **Multi-threaded Architecture**: 10 concurrent crawler threads using Java `ExecutorService`
        ```java
        ExecutorService executor = Executors.newFixedThreadPool(10);
        for (String seed : seedUrls) {
            executor.submit(new CrawlerThread(seed));
        }
        ```
    -   **Robots.txt Compliance**:
        ```java
        RobotsTxtParser parser = new RobotsTxtParser(domain);
        if (!parser.isAllowed(url, "MyBot")) {
            return; // Skip disallowed URLs
        }
        ```
    -   **URL Normalization** (Original Implementation):
        -   Convert relative URLs → absolute: `/about` → `https://example.com/about`
        -   Remove fragments: `#section` is stripped
        -   Canonicalize: `index.html` → `/`, lowercase domains
    -   **State Persistence**: BFS queue saved to disk every 100 URLs to survive crashes
        ```java
        // Serialize queue to disk
        ObjectOutputStream oos = new ObjectOutputStream(
            new FileOutputStream("crawler_state.dat")
        );
        oos.writeObject(urlQueue);
        ```
-   **Indexing** (Team Implementation):
    -   Inverted Index: `{term: [(docID, freq, positions), ...]}`
    -   TF-IDF Ranking: `score = tf * log(N/df)`
-   **Query Processing**:
    -   AND/OR operators, phrase queries with positional index
    -   Snippet generation with keyword highlighting

### 💻 My Specific Contributions
-   **Module Ownership**: Web Crawler (100% solo implementation, 2000+ lines)
-   **Key Features Built**:
    -   Multi-threaded crawling with thread-safe URL queue
    -   Robots.txt parser and compliance engine
    -   URL normalization and deduplication (HashSet-based)
    -   State management for fault tolerance
-   **Performance**: Crawled **50,000 pages** in 6 hours (138 pages/min average)
-   **Team Collaboration**: Pair-programmed indexer integration with teammate

---

## 11. Central Library System
**Type**: Database Design Project  
**Tech**: SQL Server, T-SQL  
**My Contribution**: Schema Design & ER Diagram

### 📝 Overview
A complex management system for a city library network with branches, vendors, and borrowing systems.

### 🧠 Technical Deep Dive
-   **Schema Design** (Participated in architectural design):
    -   **20+ Tables**: Users, Books, Authors, Branches, Borrowings, Fines, Vendors, Contracts
    -   **Many-to-Many Relationships**: 
        -   Books ↔ Branches (BookCopies junction table)
        -   Vendors ↔ Branches (Contracts junction table)
    -   **Recursive Relationship**: Employee.SupervisorID → Employee.EmployeeID (self-join)
    -   **Normalization**: Achieved 3NF (eliminated transitive dependencies)
-   **Stored Procedures** (Team implementation):
    ```sql
    CREATE PROCEDURE BorrowBook
        @UserID INT, @BookID INT, @BranchID INT
    AS BEGIN TRANSACTION
        UPDATE BookCopies SET Available = Available - 1
        WHERE BookID = @BookID AND BranchID = @BranchID;
        INSERT INTO Borrowings (UserID, BookID, BorrowDate, DueDate)
        VALUES (@UserID, @BookID, GETDATE(), DATEADD(DAY, 14, GETDATE()));
    COMMIT;
    ```
-   **Triggers**: Auto-calculate fines on late returns: `Fine = DATEDIFF(DAY, DueDate, ReturnDate) * 2£`
-   **Views**: `TopBorrowedBooks`, `EmployeeHierarchy` (recursive CTE for supervisor chains)

---

# 🤖 Embedded Systems, Robotics & Hardware

## 12. Multi-Robot Exploration
**Type**: Robotics (ROS) Project  
**Tech**: ROS1 (Noetic), Python/C++, Linux, Gazebo  
**My Contribution**: Configuration, Linux Workspace Setup, Pair Programming

### 📝 Overview
A swarm robotics simulation where multiple Turtlebots collaboratively explore and map an unknown environment.

### 🧠 Technical Deep Dive
-   **Map Merging**: Configured the `multirobot_map_merge` package to stitch partial maps from individual robots into a single global occupancy grid.
-   **Navigation**: Tuned the `move_base` parameters (inflation radius, costmap layers) for efficient path planning in Gazebo.

---

## 13. Embedded Line Follower
**Type**: Embedded Systems Project  
**Tech**: Android (Java/Kotlin), OpenCV, ESP32 (C++)  
**My Contribution**: Android App Design, Computer Vision Module

### 📝 Overview
A smart car that follows lines using a phone camera mounted on it, calculating error angles and sending steering commands to an ESP32.

### 🧠 Technical Deep Dive
-   **Computer Vision Pipeline** (C++ via JNI for performance):
    1.  **Canny Edge Detection**: `Canny(gray, edges, 50, 200, 3)`
    2.  **Hough Line Transform**: `HoughLinesP(edges, lines, 1, CV_PI/180, 50, 200, 50)`
    3.  **Line Merging Algorithm** (original contribution):
        ```cpp
        // Merge fragmented lines within 10px distance and 1° angle
        for (Vec4i line : lines) {
            double angle = atan2(line[3]-line[1], line[2]-line[0]);
            if (abs(angle - prevAngle) < CV_PI/180 && distance < 10.0)
                merge(line, prevLine);
        }
        ```
    4.  **Car Detection**: HSV color masking `inRange(hsv, [40,70,50], [70,255,255])` to detect green marker
    5.  **Error Calculation**: `error = car_x - (car_y - intercept) / slope`
-   **JNI Bridge**: Passed OpenCV `Mat` pointers from Kotlin to C++ for zero-copy processing:
    ```cpp
    extern "C" jobjectArray JNICALL
    Java_MainActivity_getLinesFromJNI(JNIEnv *env, jobject, jlong matAddr) {
        Mat &frame = *(Mat *) matAddr;
        // Process frame...
    }
    ```
-   **Communication Protocol**: TCP Socket `<error_angle>,<speed>\n` at 5 FPS
-   **ESP32 PID Control**: `motor_pwm = base_speed ± Kp*error`

---

## 14. MIPS Processor
**Type**: Digital Design  
**Tech**: Verilog, ModelSim  
**My Contribution**: Decode Stage, System Integration

### 📝 Overview
A complete 5-stage pipelined MIPS CPU designed in Verilog, featuring hazard detection, data forwarding, and branch prediction.

### 🧠 Technical Deep Dive
-   **My Contribution: Decode Stage Design**:
    -   **Instruction Decoder**: Implemented opcode/funct lookup table
        ```verilog
        case(opcode)
            6'b000000: alu_op = funct; // R-type
            6'b001000: alu_op = ADD;   // addi
            6'b100011: alu_op = ADD;   // lw
            6'b101011: alu_op = ADD;   // sw
        endcase
        ```
    -   **Register File**: Dual-port read (rs, rt), single-port write (rd)
    -   **Control Signal Generation**: 15 control signals (RegWrite, MemRead, ALUSrc, etc.)
-   **Hazard Unit** (Team Implementation):
    -   **Load-Use Detection**:
        ```verilog
        // Detect when lw result needed in next instruction
        load_use_hazard = (ID_EX_MemRead && 
            ((ID_EX_rt == IF_ID_rs) || (ID_EX_rt == IF_ID_rt)));
        if (load_use_hazard) stall = 1; // Insert bubble
        ```
-   **Data Forwarding Paths** (My Contribution to Integration):
    -   **EX Hazard**: Forward from EX/MEM stage to ALU inputs
    -   **MEM Hazard**: Forward from MEM/WB stage to ALU inputs
    -   **Priority**: EX hazard takes precedence over MEM hazard
-   **Branch Prediction** (Team):
    -   Static predict-not-taken (flush on misprediction)
-   **Performance Metrics**:
    -   **CPI**: 1.2 (ideal pipelined = 1.0, hazards add 0.2)
    -   **Clock Frequency**: 50 MHz (constrained by critical path in ALU)
    -   **Test Coverage**: 25 MIPS programs verified (sorting, fibonacci, matrix mult)

### 💻 My Specific Contributions
-   **Decode Stage**: Designed complete ID stage (instruction decode, register file, control unit)
-   **System Integration**: Connected 5 pipeline stages, debugged inter-stage register timing
-   **Hazard Verification**: Created test cases to verify forwarding logic correctness
-   **Waveform Analysis**: 40+ hours in ModelSim debugging pipeline stalls
-   **Team Role**: 1 of 3 members, responsible for 30% of Verilog codebase

---

# 💻 Software Engineering & Algorithms

## 17. Circuits Solver
**Type**: C++ Course Project  
**Tech**: C++, Eigen Library  
**My Contribution**: C++ Implementation

### 📝 Overview
A SPICE-inspired circuit simulator using Modified Nodal Analysis (MNA) to solve for node voltages in arbitrary linear circuits containing resistors, capacitors, inductors, and dependent sources.

### 🧠 Technical Deep Dive
-   **Modified Nodal Analysis (MNA) Implementation**:
    -   **System Matrix Formation**: $Ax = b$
        -   $A$: Conductance matrix (size: $N \times N$ for $N$ nodes)
        -   $x$: Node voltage vector $[V_1, V_2, ..., V_N]^T$
        -   $b$: Current source vector
    -   **MNA Stamps** (Object-Oriented Design):
        ```cpp
        // Base Component class
        class Component {
        public:
            virtual void stamp(MatrixXd &A, VectorXd &b) = 0;
        };
        
        // Resistor stamp: G = 1/R
        class Resistor : public Component {
            void stamp(MatrixXd &A, VectorXd &b) override {
                double G = 1.0 / resistance;
                A(node1, node1) += G; A(node2, node2) += G;
                A(node1, node2) -= G; A(node2, node1) -= G;
            }
        };
        
        // Voltage Source: adds row/column for branch current
        class VoltageSource : public Component {
            void stamp(MatrixXd &A, VectorXd &b) override {
                int i = num_nodes + branch_index; // Augmented row
                A(i, node1) = 1; A(i, node2) = -1;
                A(node1, i) = 1; A(node2, i) = -1;
                b(i) = voltage_value;
            }
        };
        ```
-   **Eigen Integration**:
    -   **Sparse Solver**: Used `Eigen::SparseQR` for large circuits (1000+ nodes)
    -   **Dense Solver**: `Eigen::ColPivHouseholderQR` for small circuits (<100 nodes)
    -   **Solver Selection**:
        ```cpp
        if (num_nodes > 100) {
            SparseQR<SparseMatrix<double>> solver;
            x = solver.solve(b);
        } else {
            x = A.colPivHouseholderQr().solve(b);
        }
        ```
-   **Supported Components**:
    -   Passive: R, L, C (AC analysis via phasor transform)
    -   Sources: Independent (V, I), Dependent (VCVS, VCCS, CCVS, CCCS)
    -   Example VCVS (Voltage-Controlled Voltage Source):
        ```cpp
        // Vout = gain * (V_ctrl+ - V_ctrl-)
        A(out+, ctrl+) = gain; A(out+, ctrl-) = -gain;
        ```
-   **Transient Analysis** (Time-Domain Simulation):
    -   **Backward Euler**: Implicit integration for stability
    -   Capacitor: $I = C \frac{dV}{dt} \approx C \frac{V_n - V_{n-1}}{\Delta t}$
    -   Inductor: $V = L \frac{dI}{dt} \approx L \frac{I_n - I_{n-1}}{\Delta t}$

### 💻 My Specific Contributions
-   **Full Implementation**: Solo project (1500+ lines C++)
-   **Highlights**:
    -   Designed Component hierarchy with virtual stamp() methods
    -   Integrated Eigen library for linear algebra
    -   Implemented netlist parser (custom format: `R1 n1 n2 1k`)
    -   Validated against LTspice for 20+ test circuits
-   **Performance**: Solved 500-node circuit in **18ms** (LTspice: 12ms - acceptable overhead for educational tool)

---

## 18. Logic Simulator
**Type**: OOP Project  
**Tech**: C++, CMU Graphics  
**My Contribution**: Application Manager (The Brain)

### 📝 Overview
A GUI-based digital logic circuit simulator featuring drag-and-drop gates, waveform visualization, and undo/redo functionality powered by the **Command Pattern**.

### 🧠 Technical Deep Dive
-   **My Contribution: Application Manager ("The Brain")**:
    -   **Command Pattern Architecture**:
        ```cpp
        class Command {
        public:
            virtual void Execute() = 0;
            virtual void Undo() = 0;
        };
        
        class AddGateCommand : public Command {
            Gate* gate;
            Circuit* circuit;
        public:
            void Execute() override {
                circuit->AddGate(gate);
                gate->Draw();
            }
            void Undo() override {
                circuit->RemoveGate(gate);
                circuit->Redraw();
            }
        };
        ```
    -   **Command Stack** (Undo/Redo):
        ```cpp
        stack<Command*> undoStack;
        stack<Command*> redoStack;
        
        void ExecuteCommand(Command* cmd) {
            cmd->Execute();
            undoStack.push(cmd);
            // Clear redo stack on new action
            while (!redoStack.empty()) {
                delete redoStack.top();
                redoStack.pop();
            }
        }
        
        void Undo() {
            if (!undoStack.empty()) {
                Command* cmd = undoStack.top();
                cmd->Undo();
                redoStack.push(cmd);
                undoStack.pop();
            }
        }
        ```
-   **Simulation Engine** (Team Implementation):
    -   **Topological Sort**: Order gates for correct signal propagation
    -   **Event-Driven Simulation**: Only re-evaluate gates whose inputs changed
-   **Supported Gates**: AND, OR, NOT, NAND, NOR, XOR, XNOR, Buffer, Tri-State
-   **Advanced Features**:
    -   Multi-input gates (2-8 inputs)
    -   Propagation delay simulation (configurable per gate)
    -   Waveform viewer for timing analysis

### 💻 My Specific Contributions
-   **Application Manager Module**: Orchestrated all app components (UI, Logic, File I/O)
-   **Command Pattern**: Designed and implemented full undo/redo system (12 command types)
-   **State Machine**: Managed app modes (Add Mode, Edit Mode, Simulate Mode, Connect Mode)
-   **File Serialization**: Implemented save/load using custom binary format
-   **Team Role**: 1 of 4 members, owned "Application Logic" layer (25% of codebase)

---

> **Note**: This encyclopedia is a living document derived from source code analysis and contributor interviews.
