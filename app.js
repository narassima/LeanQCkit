// 7 QC Tools & COPQ Diagnostic Suite — Operations Logic



// Global Application State

const appState = {

    selectedSymptom: '',

    checksheet: {

        periods: ['Station 1: Reflow Paste', 'Station 2: Solder Assembly', 'Station 3: Avionics Testing', 'Station 4: Final Inspection'],

        categories: ['Motor wiring loose', 'Software flash failure', 'Chassis crack on QA', 'Packaging seal failure', 'Other / Uncategorised'],

        data: {

            'Motor wiring loose': [4, 12, 2, 1],

            'Software flash failure': [1, 2, 6, 1],

            'Chassis crack on QA': [2, 5, 1, 3],

            'Packaging seal failure': [0, 1, 1, 4],

            'Other / Uncategorised': [1, 1, 0, 1]

        },

        compiled: []

    },

    fishbone: {

        effect: 'Motor wiring loose',

        causes: [

            { id: 'c1', category: 'man', text: 'Untrained assembler on line', why1: 'High turnover rate', why2: 'Low entry wage structure', why3: 'HR hiring policy constraints', why4: 'Sub-optimal budget allocation', why5: 'Corporate strategic cost-cutting focus', root: 'Corporate strategic cost-cutting focus' },

            { id: 'c2', category: 'machine', text: 'Wire crimping tool worn out', why1: 'Tool calibration scheduled too late', why2: 'Preventative maintenance SOP not followed', why3: 'Maintenance technicians overloaded', why4: 'Understaffed department', why5: 'Inadequate training budget allocation', root: 'Inadequate training budget allocation' }

        ]

    },

    capability: {

        varName: 'Reflow Peak Temperature',

        varUnit: '°C',

        station: 'Station 2: Solder Assembly',

        lsl: 235.0,

        usl: 245.0,

        data: [238.1, 239.5, 237.0, 236.2, 241.0, 238.4, 239.1, 237.5, 240.2, 238.5, 236.8, 242.0, 240.8, 237.9, 239.4, 238.0, 239.0, 239.9, 241.5, 237.5]

    },

    scatter: {

        xLabel: 'Conveyor Speed (m/min)',

        yLabel: 'Peak Joint Temp (°C)',

        data: [

            { x: 1.0, y: 244.2 }, { x: 1.2, y: 242.1 }, { x: 1.4, y: 239.5 }, { x: 1.6, y: 237.2 }, { x: 1.8, y: 234.8 },

            { x: 2.0, y: 232.0 }, { x: 2.2, y: 229.4 }, { x: 2.4, y: 226.5 }, { x: 2.6, y: 223.8 }, { x: 2.8, y: 221.0 }

        ]

    },

    control: {

        varName: 'Peak Joint Temp',

        varUnit: '°C',

        station: 'Station 2: Solder Assembly',

        data: [238.2, 239.1, 237.8, 238.5, 239.4, 238.0, 239.6, 240.1, 243.5, 238.3, 237.5, 238.9, 238.1, 239.2, 238.9, 239.5, 238.8, 239.3, 244.2, 238.0]

    },

    stratification: {

        stations: []

    }

};



// Practitioner Diagnoser Map (18 Operational Symptoms with Mathematical Formulations)

const symptomDiagnoses = {

    defects: {

        step1: "Deploy the <strong>7 QC Tools Sequence</strong>: Log failures on Check Sheet → Run Pareto to isolate vital few → Map Fishbone &amp; 5-Why. Track: \\(\\text{First Pass Yield (FPY)} = \\prod Y_i\\).",

        step2: "Implement <strong>Poka-Yoke Level 3/4 (Mistake Proofing)</strong> physically preventing incorrect assembly at the source.",

        step3: "Deploy <strong>Six Sigma DMAIC project routing</strong>: design process parameter optimization models.",

        case: "<strong>Apollo Hospital:</strong> Digital wristband mismatch rate was 3.2%. Implemented hard-stop barcode validations. Near zero failure rate achieved.",

        targetStep: 1

    },

    output: {

        step1: "Calculate <strong>Takt Time</strong> demand pace: \\(T = \\frac{\\text{Net Available Work Time}}{\\text{Customer Demand Rate}}\\). Run **Bottleneck diagnostics** where cycle time exceeding Takt identifies constraints.",

        step2: "Implement <strong>Line Balancing</strong>: redistribute operational tasks to balance station load below Takt Time limits.",

        step3: "Introduce parallel routing cells or increase capacity at the identified bottleneck station.",

        case: "<strong>Arjun Cycles:</strong> Frame line cycle time was 98s vs Takt limit of 72s. Task sharing lowered Stn 2 time, increasing daily output by 36%.",

        targetStep: 4

    },

    leadtime: {

        step1: "Draw a <strong>Value Stream Map (VSM)</strong> detailing processing delays. Compute **Process Cycle Efficiency (PCE)**: \\(PCE = \\frac{\\text{Value-Add Time (VAT)}}{\\text{Total Lead Time (LT)}} \\times 100\\) (By Little's Law: \\(LT = \\frac{\\text{WIP}}{\\text{Throughput}}\\)).",

        step2: "Shift from push schedule allocation to a pull-based **Kanban replenishment system** with strict WIP caps.",

        step3: "Re-layout the shopfloor into U-shaped manufacturing cells to streamline workflow handling.",

        case: "<strong>Pinnacle Home Finance:</strong> Home loan processing was 16 days. Restructured queue buffers and co-located credit evaluators. Processing time dropped to 6 days.",

        targetStep: 7

    },

    changeover: {

        step1: "Trace machine changeover steps. Classify tasks into Internal vs. External. Track changeover loss: \\(\\text{Setup Loss Rate} = \\frac{\\text{Changeover Hours}}{\\text{Total Available Hours}} \\times 100\\).",

        step2: "Apply **SMED steps**: convert internal steps to external by pre-staging, pre-heating, and standardization.",

        step3: "Streamline remaining internal processes using quick-release tooling clamps.",

        case: "<strong>Arjun Cycles Paint Line:</strong> Colour changeover reduced from 45 min to 18 min (-60%) by pre-preparing paint canisters and standardizing quick-swaps.",

        targetStep: 7

    },

    wip: {

        step1: "Establish **Kanban loops** sizing safety inventory WIP limits: \\(WIP_{\\text{limit}} = \\text{Takt Time} \\times \\text{Process Buffer}\\).",

        step2: "Transition production batches to single-unit flow. Stop push-scheduling inventory allocations.",

        step3: "Enforce **5S visual limits**: paint floor indicators for designated maximum storage heights.",

        case: "<strong>SunChem Coatings:</strong> Buffer between reactor and packaging line restricted to 1 batch via Kanban. WIP inventory holding cost dropped 40%.",

        targetStep: 6

    },

    motion: {

        step1: "Draw operator <strong>Spaghetti Diagrams</strong>. Calculate travel distance waste: \\(D = \\sum (F_i \\times d_i)\\).",

        step2: "Redesign workstation layout to keep sequential steps adjacent. Optimize material presentation height.",

        step3: "Build point-of-use shadow boards (5S) to eliminate walking trips to remote toolrooms.",

        case: "<strong>Arjun Cycles Assembly:</strong> Walking distance reduced from 340m to 85m (-75%) by designing workstation shadow toolboards.",

        targetStep: 7

    },

    skills: {

        step1: "Construct a <strong>Cross-Training Matrix</strong> matching skills. Track overall workforce capability: \\(\\text{Cross-Training Index} = \\frac{\\sum \\text{Skills per Operator}}{\\text{Total Station Skills}}\\).",

        step2: "Standardize best practices using visual **Standard Work** instructions to ensure consistency across shifts.",

        step3: "Automate repetitive steps and deploy human experts to high-leverage variance control tasks.",

        case: "<strong>Pinnacle Home Finance:</strong> Process bottlenecked when only 1 officer could sign legal documents. Cross-trained credit officers; legal cycle time fell from 22 min to 14 min.",

        targetStep: 7

    },

    oee: {

        step1: "Compute **Overall Equipment Effectiveness (OEE)**: \\(OEE = \\text{Availability} \\times \\text{Performance} \\times \\text{Quality}\\). Categorize availability, performance, and quality losses.",

        step2: "Implement **Total Productive Maintenance (TPM)**: train operators in daily autonomous maintenance tasks.",

        step3: "Apply SPC tracking to critical mechanical parameters to predict tooling wear before breakdown.",

        case: "<strong>Automotive Forge Line:</strong> Breakdown losses dropped 30% after implementing autonomous daily lube schedules and X-bar pressure tracking charts.",

        targetStep: 6

    },

    scrap: {

        step1: "Run yield analysis. Log scrap quantities and track raw loss: \\(\\text{Scrap Rate} = \\frac{\\text{Scrap Weight}}{\\text{Input Weight}} \\times 100\\).",

        step2: "Implement process-parameter monitoring (Control Charts) to keep inputs centered at target values.",

        step3: "Redesign feed systems to cut startup trimming wastes and tooling setups.",

        case: "<strong>SunChem Coatings:</strong> Reduced startup purging scrap by 45% by shifting refilling procedures to run while maintaining active temperature levels.",

        targetStep: 4

    },

    design: {

        step1: "Deploy **Quality Function Deployment (QFD) / House of Quality (HOQ)**. Compare tolerance ranges with process capability: \\(C_{pk} = \\min\\left(\\frac{\\text{USL} - \\mu}{3\\sigma}, \\frac{\\mu - \\text{LSL}}{3\\sigma}\\right) \\ge 1.33\\).",

        step2: "Compare tolerance ranges with process capability standard limits (\\(C_{pk}\\)). Adjust tolerances or process capabilities.",

        step3: "Perform Design for Manufacturing and Assembly (DFMA) reviews to simplify joint soldering structures.",

        case: "<strong>IoT Smart Hub:</strong> Board soldering fractures were cut in half when printed track width tolerances were updated to reflect process capabilities.",

        targetStep: 4

    },

    infosilose: {

        step1: "Map information flows on a **Value Stream Map (VSM)**. Calculate communication speed: \\(\\text{Info Lead Time} = \\sum (\\text{Processing Time} + \\text{Inbox Queue Time})\\).",

        step2: "Implement an **Obeya (War Room)** or Daily Standup scheduling process to synchronize teams.",

        step3: "Create digital, cross-functional performance dashboards to share data instantly.",

        case: "<strong>Apex Avionics:</strong> Engineering updates delayed procurement by 9 days. Daily standup meetings and shared kanban boards cut info delay to 2 days.",

        targetStep: 7

    },

    visuals: {

        step1: "Perform a shopfloor **5S Audit** to measure visual standards. Track compliance: \\(\\text{5S Score} = \\frac{\\text{Standards Met}}{\\text{Total Standards Audited}} \\times 100\\). Target Search Time \\(\\le 30\\text{s}\\).",

        step2: "Install physical **Andon lights**, color-coded inventory bins, and floor tape markings indicating WIP caps.",

        step3: "Deploy clean, visible shadow boards at point-of-use workstations.",

        case: "<strong>Arjun Paint Cell:</strong> Operators spent 14 minutes per shift searching for paint nozzles. Adding colored shadow boards cut searching times to zero.",

        targetStep: 7

    },

    scheduling: {

        step1: "Map inventory fluctuations and build order-production gap charts. Track turnover speed: \\(\\text{Inventory Turns} = \\frac{\\text{Cost of Goods Sold}}{\\text{Average Inventory Value}}\\).",

        step2: "Establish **Heijunka (Production Leveling)** scheduling to level batch sizes into mixed daily patterns.",

        step3: "Transition dispatching to a pull-based visual **Kanban card system**.",

        case: "<strong>Smart Hub Assembly:</strong> Monthly batch runs caused constant parts shortage. Leveling schedules into daily runs of 50 units cut delivery times by 65%.",

        targetStep: 1

    },

    planning: {

        step1: "Run resource profiles against market demand cycles using standard work capacity sheets: \\(\\text{Capacity Load Ratio} = \\frac{\\text{Required Work Hours}}{\\text{Available Capacity Hours}}\\).",

        step2: "Implement monthly **Sales & Operations Planning (S&OP)** and verify process standard run-rates.",

        step3: "Deploy capacity constraint charts to balance machine loads against order forecasts.",

        case: "<strong>SunChem Coatings:</strong> Reactor over-commitments caused constant bottleneck delays. Aligning production plans to proven process standard rates stabilized lines.",

        targetStep: 4

    },

    absenteeism: {

        step1: "Construct plant Skill Matrices. Track labor stability: \\(\\text{Absenteeism Rate} = \\frac{\\text{Absent Hours}}{\\text{Scheduled Hours}} \\times 100\\).",

        step2: "Draft visual **Standard Work Instructions (SOPs)** so backup operators can easily step in.",

        step3: "Establish rotating cross-functional team roles (floaters) to stabilize output variance.",

        case: "<strong>Pinnacle Home Finance:</strong> Staffing shortages delayed underwriting. Training credit officers on visual SOP checklists maintained steady approval times.",

        targetStep: 7

    },

    workdist: {

        step1: "Draft an **Operator Balance Chart (Yamazumi)** to compare line times: \\(\\text{Line Efficiency} = \\frac{\\sum C_{t,i}}{N \\times \\max(C_{t,i})} \\times 100\\).",

        step2: "Redistribute assembly work element allocations to balance cycle times below Takt limits.",

        step3: "Design U-shaped cells allowing adjacent operators to share work dynamically.",

        case: "<strong>Apex Assembly:</strong> Station 2 operator was overloaded (88s) while Station 3 was idle (32s). Work redistribution cut joint cycle times to 60s (+25% yield).",

        targetStep: 4

    },

    skillgap: {

        step1: "Track defect rates by line operator to isolate needs and measure training returns: \\(\\text{Training Efficiency Index} = \\frac{\\text{Post-training Defect Rate}}{\\text{Baseline Defect Rate}}\\).",

        step2: "Deploy **Job Instruction (TWI - Training Within Industry)** methods and standard visual checklists.",

        step3: "Implement physical error-proofing devices (Poka-Yoke) to make process errors physically impossible.",

        case: "<strong>Apex Smart Hub Line:</strong> Inexperienced technicians had high joint fracture rates. Visual soldering cards and standard TWI training cut errors by 70%.",

        targetStep: 3

    },

    downtime: {

        step1: "Calculate equipment availability: \\(\\text{MTBF} = \\frac{\\text{Total Run Time}}{\\text{Breakdowns}}\\) and \\(\\text{MTTR} = \\frac{\\text{Total Repair Time}}{\\text{Breakdowns}}\\).",

        step2: "Launch **Total Productive Maintenance (TPM)**, training operators in daily autonomous cleaning and oiling.",

        step3: "Deploy SPC run charts on temperatures or pressure to predict and prevent machine failure.",

        case: "<strong>Automotive Forge Press:</strong> Unpredicted pump failures caused 18 hours of weekly down time. Operator autonomous maintenance checks cut failures by 75%.",

        targetStep: 6

    }

};



// Detailed Guidance Definitions Dictionary for Info Modal

const infoDefinitions = {

    'symptom': {

        title: 'Diagnostic Guide: Primary Operational Symptoms, Formulas & Case Studies',

        body: `

            <p>Select the operational symptom observed in your process. Lean practitioners use these diagnostic triggers to isolate waste, calculate baseline process metrics, and choose target interventions. Click on any symptom below to review steps, formulas, and case studies:</p>

            <div class="symptom-details-list">

                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-triangle-exclamation"></i> 1. High Rework / Defect Rate (Defects)</h4>

                    <p><strong>Operational Impact:</strong> High cost of scrap, wasted inspection labor, capacity loss, and customer returns.</p>

                    <p><strong>Case Study (Apollo Hospital):</strong> Wristband mismatch rate was 3.2%, creating severe patient identity hazards. Hard-stop barcode match locks reduced failures to near zero.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{First Pass Yield (FPY)} = \\prod Y_i = Y_1 \\times Y_2 \\times \\dots \\times Y_n\\) (multiplies yield rates across process steps).</li>

                            <li><strong>Variables:</strong> \\(Y_i\\) (yield rate at station \(i\)), \\(D\\) (total defects logged), \\(P\\) (production volume).</li>

                            <li><strong>Lean Toolchain:</strong> Check Sheet tallying \(\rightarrow\) Pareto sorting of the vital few \(\rightarrow\) Fishbone 6M root-cause mapping \(\rightarrow\) 5-Why systemic investigation.</li>

                        </ul>

                    </div>

                </div>

                

                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-gauge-high"></i> 2. Output Below Demand (Bottleneck)</h4>

                    <p><strong>Operational Impact:</strong> Missed delivery deadlines, backlogs, and costly overtime.</p>

                    <p><strong>Case Study (Arjun Cycles):</strong> Frame welding cycle time was 98s against a Takt limit of 72s. Task sharing and load balancing lowered cycle times, raising output by 36%.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Takt Time (T)} = \\frac{\\text{Net Available Work Time}}{\\text{Customer Demand Rate}}\\). \\(\\text{Line Efficiency} = \\frac{\\sum C_{t,i}}{N \\times \\text{Bottleneck Cycle Time}} \\times 100\\).</li>

                            <li><strong>Variables:</strong> \\(T\\) (Takt Time), \\(C_{t,i}\\) (Cycle Time of station \(i\)), \\(N\\) (Operator count).</li>

                            <li><strong>Lean Toolchain:</strong> Cycle Time mapping \(\rightarrow\) Operator balance profiling \(\rightarrow\) task element redistribution.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-hourglass-half"></i> 3. Long Lead Time / Queue Delays (Wait)</h4>

                    <p><strong>Operational Impact:</strong> Frozen working capital, order cancellations, and delayed responsiveness.</p>

                    <p><strong>Case Study (Pinnacle Home Finance):</strong> Home loan processing took 16 days. Mapping value streams (VSM) and co-locating underwriters in single flow cells compressed cycle time to 6 days.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Process Lead Time (LT)} = \\frac{\\text{Work-In-Progress (WIP)}}{\\text{Throughput Rate}}\\) (Little's Law). \\(\\text{Process Cycle Efficiency (PCE)} = \\frac{\\text{Value-Add Time (VAT)}}{\\text{Total Lead Time (LT)}} \\times 100\\).</li>

                            <li><strong>Variables:</strong> \\(WIP\\) (Unfinished inventory units), \\(VAT\\) (Actual work time), \\(LT\\) (Total turnaround time).</li>

                            <li><strong>Lean Toolchain:</strong> Value Stream Mapping (VSM) \(\rightarrow\) visual buffer caps \(\rightarrow\) physical cell layouts.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-arrows-spin"></i> 4. Long Machine Changeover Time</h4>

                    <p><strong>Operational Impact:</strong> Forced large batching, inventory bloat, and rigid scheduling.</p>

                    <p><strong>Case Study (Arjun Cycles Paint Line):</strong> Color setups took 45 minutes. Converting internal steps to external (SMED) by pre-staging paint canisters cut setup downtime to 18 minutes (-60%).</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Setup Loss Rate} = \\frac{\\text{Changeover Hours}}{\\text{Total Available Hours}} \\times 100\\).</li>

                            <li><strong>Variables:</strong> Internal tasks (done when machine is stopped), External tasks (done while running).</li>

                            <li><strong>Lean Toolchain:</strong> SMED (Single-Minute Exchange of Die) tasks classification \(\rightarrow\) external preparation standardization.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-layer-group"></i> 5. High Work-in-Progress (WIP) / Excess Inventory</h4>

                    <p><strong>Operational Impact:</strong> Congested floors, cash flow constraints, and defect hiding.</p>

                    <p><strong>Case Study (SunChem Coatings):</strong> Safety stocks between reactor and packaging lines were uncapped. Kanban limits capped buffer storage to 1 batch, dropping holding costs by 40%.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Kanban Card Qty (K)} = \\frac{\\text{Daily Demand} \\times \\text{Lead Time} \\times (1 + \\alpha)}{\\text{Container Capacity}}\\).</li>

                            <li><strong>Variables:</strong> \\(\\alpha\\) (Safety factor, usually 0.1 \\text{ to } 0.2), Lead Time (replenishment cycle).</li>

                            <li><strong>Lean Toolchain:</strong> Kanban calculation \(\rightarrow\) visual limit tapes \(\rightarrow\) visual replenishment loops.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-person-walking-arrow-right"></i> 6. Excessive Motion / Transport Waste</h4>

                    <p><strong>Operational Impact:</strong> Worker fatigue, physical injury, and safety risks.</p>

                    <p><strong>Case Study (Arjun Cycles Assembly):</strong> Assembly technicians walked 340 meters per cycle. Spaghetti mapping and co-locating tools on point-of-use shadow boards cut movement to 85m (-75%).</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Travel Distance Waste (D)} = \\sum (F_i \\times d_i)\\).</li>

                            <li><strong>Variables:</strong> \\(F_i\\) (Walk frequency per shift), \\(d_i\\) (Walk distance in meters).</li>

                            <li><strong>Lean Toolchain:</strong> Spaghetti diagram mapping \(\rightarrow\) U-shaped cell configurations \(\rightarrow\) point-of-use layouts.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-graduation-cap"></i> 7. Skills Underutilised / Single-Point Failure</h4>

                    <p><strong>Operational Impact:</strong> Production bottlenecks when key experts take leave.</p>

                    <p><strong>Case Study (Pinnacle Home Finance):</strong> Critical loan signing bottlenecked on 1 officer. Cross-training underwriters to verify approvals cut legal cycle times from 22 to 14 minutes.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Cross-Training Index} = \\frac{\\sum \\text{Skills per Operator}}{\\text{Total Station Skills}}\\).</li>

                            <li><strong>Variables:</strong> Competency levels (1: Trainee, 2: Can run solo, 3: Trainer).</li>

                            <li><strong>Lean Toolchain:</strong> Skill Matrix mapping \(\rightarrow\) cross-training scheduling \(\rightarrow\) Standard Work SOPs.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-screwdriver-wrench"></i> 8. Low Equipment Utilization / Breakdowns (OEE Deficit)</h4>

                    <p><strong>Operational Impact:</strong> Idle capital, unexpected repair costs, and scheduling uncertainty.</p>

                    <p><strong>Case Study (Automotive Forge Line):</strong> Hydraulic presses had a 15% breakdown rate. Transitioning operators to daily autonomous lubrication and tracking pump pressure (SPC) reduced failures by 30%.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{OEE} = \\text{Availability} \\times \\text{Performance} \\times \\text{Quality}\\).</li>

                            <li><strong>Variables:</strong> \\(\\text{Availability} = \\frac{\\text{Actual Run Time}}{\\text{Planned Time}}\\), \\(\\text{Performance} = \\frac{\\text{Theoretical Cycle Time} \\times \\text{Total Parts}}{\\text{Run Time}}\\), \\(\\text{Quality} = \\frac{\\text{Good Parts}}{\\text{Total Parts}}\\).</li>

                            <li><strong>Lean Toolchain:</strong> OEE logging \(\rightarrow\) Six Big Losses audit \(\rightarrow\) TPM Autonomous Maintenance.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-trash-can"></i> 9. Material Scrap / Yield Losses</h4>

                    <p><strong>Operational Impact:</strong> Raw material financial losses and environmental waste.</p>

                    <p><strong>Case Study (SunChem Coatings):</strong> Start-up product purging wasted 4.8% of inputs. Centering temperature parameters on SPC control run charts cut purging waste by 45%.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Scrap Rate} = \\frac{\\text{Weight of Scrapped Material}}{\\text{Total Input Material Weight}} \\times 100\\).</li>

                            <li><strong>Variables:</strong> Input material weight, discard weight, material cost per kg.</li>

                            <li><strong>Lean Toolchain:</strong> Scrap mapping by zone \(\rightarrow\) Parameter Control Charts \(\rightarrow\) centering processes.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-compass-drafting"></i> 10. Design Mismatch with Process Limits</h4>

                    <p><strong>Operational Impact:</strong> High variation failures because product specifications are tighter than the natural precision of the machinery.</p>

                    <p><strong>Case Study (IoT Smart Hub):</strong> Board soldering fractures were cut in half when printed track width tolerances were updated to reflect process capabilities.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(C_p = \\frac{\\text{USL} - \\text{LSL}}{6\\sigma}\\) (design width over process width), \\(C_{pk} = \\min\\left(\\frac{\\text{USL} - \\mu}{3\\sigma}, \\frac{\\mu - \\text{LSL}}{3\\sigma}\\right)\\).</li>

                            <li><strong>Variables:</strong> \\(\\text{USL}/\\text{LSL}\\) (Spec limits), \\(\\mu\\) (Process Mean), \\(\\sigma\\) (Std Dev).</li>

                            <li><strong>Lean Toolchain:</strong> House of Quality (HOQ) design checks \(\rightarrow\) capability studies ($C_{pk}$) \(\rightarrow\) tolerance widening.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-share-nodes"></i> 11. Delayed Information Sharing (Information Silos)</h4>

                    <p><strong>Operational Impact:</strong> Delays in design releases, procurement updates, or quality feedback due to administrative queues and communication gaps.</p>

                    <p><strong>Case Study (Apex Avionics):</strong> Engineering updates delayed purchasing by 9 days. Daily standups and digital Kanban visual boards cut communication delay to 2 days.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Information Lead Time} = \\sum (\\text{Active Process Time} + \\text{Inbox Handoff Delay})\\).</li>

                            <li><strong>Variables:</strong> Process time vs. waiting-in-inbox queue time.</li>

                            <li><strong>Lean Toolchain:</strong> Value Stream Mapping (VSM) \(\rightarrow\) Obeya (War Room) visual standups \(\rightarrow\) digital workflow dashboards.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-eye"></i> 12. Lack of Visual Controls / Signals (No Visual Management)</h4>

                    <p><strong>Operational Impact:</strong> Operators struggle to find tooling, safety boundaries are unclear, and inventory levels are unmonitored.</p>

                    <p><strong>Case Study (Arjun Paint Cell):</strong> Technicians lost 14 minutes per shift searching for paint nozzles. Visual color-coded shadow boards cut search times to zero.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{5S Score (\\%)} = \\frac{\\text{Audit Points Met}}{\\text{Total Audit Standards}} \\times 100\\).</li>

                            <li><strong>Variables:</strong> Sorting, Straightening, Shining, Standardizing, Sustaining.</li>

                            <li><strong>Lean Toolchain:</strong> 5S Workplace Audits \(\rightarrow\) shadow boards \(\rightarrow\) Andon alarms \(\rightarrow\) boundary floor lines.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-calendar-days"></i> 13. Production Scheduling Mismatch (Push Scheduling)</h4>

                    <p><strong>Operational Impact:</strong> Component shortages and excessive safety stocks.</p>

                    <p><strong>Case Study (Smart Hub Assembly):</strong> Large monthly batches caused persistent parts shortages. Leveling dispatch rates to daily runs of 50 units (Heijunka) cut lead times by 65%.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Inventory Turns} = \\frac{\\text{Cost of Goods Sold}}{\\text{Average On-Hand Inventory}}\\).</li>

                            <li><strong>Variables:</strong> COGS, inventory valuation.</li>

                            <li><strong>Lean Toolchain:</strong> Inventory turns audits \(\rightarrow\) Heijunka (Production Leveling) scheduling \(\rightarrow\) Kanban loops.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-chart-gantt"></i> 14. Planning Mismatch / Capacity Planning Issues</h4>

                    <p><strong>Operational Impact:</strong> Inability to fulfill delivery dates, inventory spikes, or machine overloading.</p>

                    <p><strong>Case Study (SunChem Coatings):</strong> Commitments overran capacity by 20%. Aligning work schedules to standard capacity profiles stabilized line cycle rates.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Capacity Load Ratio} = \\frac{\\text{Required Work Hours}}{\\text{Actual Machine Capacity Hours}}\\).</li>

                            <li><strong>Variables:</strong> Required work hours, available hours, target run efficiency.</li>

                            <li><strong>Lean Toolchain:</strong> S&OP capacity checklists \(\rightarrow\) standard work capacity profile sheets.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-user-xmark"></i> 15. High Operator Absenteeism / Staffing Disruptions</h4>

                    <p><strong>Operational Impact:</strong> Stalled assembly flows, station shutdowns, and quality variance.</p>

                    <p><strong>Case Study (Pinnacle Home Finance):</strong> Staff shortages stalled home loan underwriting. Documenting cross-functional visual SOP lists stabilized processing speeds.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Absenteeism Rate (\\%)} = \\frac{\\text{Lost Work Hours}}{\\text{Scheduled Work Hours}} \\times 100\\).</li>

                            <li><strong>Variables:</strong> Sick leaves, roster capacity.</li>

                            <li><strong>Lean Toolchain:</strong> Cross-training index updates \(\rightarrow\) visual SOP checklists \(\rightarrow\) rotating operator floaters.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-scale-unbalanced-flip"></i> 16. Non-Uniform Work Distribution (Unequal Work Allocation)</h4>

                    <p><strong>Operational Impact:</strong> Severe operator fatigue at bottleneck stations while others are underutilized.</p>

                    <p><strong>Case Study (Apex Assembly):</strong> Station 2 took 88s while Station 3 took 32s. Operator Balance Chart (Yamazumi) redistribution balanced cycle rates to 60s (+25% throughput).</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Line Balance Efficiency (\\%)} = \\frac{\\sum C_{t,i}}{N \\times \\max(C_{t,i})} \\times 100\\).</li>

                            <li><strong>Variables:</strong> Cycle times, maximum cycle time (bottleneck).</li>

                            <li><strong>Lean Toolchain:</strong> Operator Balance Charts (Yamazumi) \(\rightarrow\) micro-task element redistribution.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; border-bottom: 1px solid var(--border); padding-bottom: 20px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-id-card-clip"></i> 17. Lack of Skilled Workforce / Untrained Staff</h4>

                    <p><strong>Operational Impact:</strong> Spikes in assembly errors, tooling damage, and high training costs.</p>

                    <p><strong>Case Study (Apex Smart Hub Line):</strong> New hires had high joint fracture rates. Visual training manuals and hands-on Job Instruction training cut startup errors by 70%.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{Training Efficiency Index} = \\frac{\\text{Post-training Defect Rate}}{\\text{Baseline Defect Rate}}\\).</li>

                            <li><strong>Variables:</strong> Baseline error rate, trained operator defect output.</li>

                            <li><strong>Lean Toolchain:</strong> Training Within Industry (TWI) Job Instruction charts \(\rightarrow\) visual reference cards \(\rightarrow\) mistake-proofing locks.</li>

                        </ul>

                    </div>

                </div>



                <div style="margin-bottom: 25px; padding-bottom: 5px;">

                    <h4 style="color: var(--accent); margin-top: 0; font-family: 'Outfit', sans-serif;"><i class="fa-solid fa-triangle-exclamation"></i> 18. Unpredictable Machine Downtime / Breakdowns</h4>

                    <p><strong>Operational Impact:</strong> Urgent maintenance fees, production delays, and late orders.</p>

                    <p><strong>Case Study (Automotive Forge Press):</strong> Unplanned pump failures lost 18 hours per week. Introducing daily operator cleaning, checks, and lubrication (TPM) cut downtime by 75%.</p>

                    <div style="margin-top: 10px; background-color: #F8F9FA; padding: 12px; border-radius: 6px; border-left: 3px solid var(--primary-light); font-size: 0.88rem;">

                        <strong>Methodology Breakdown:</strong>

                        <ul style="margin: 5px 0 0 15px; padding: 0; list-style-type: disc;">

                            <li><strong>Diagnostic Formula:</strong> \\(\\text{MTBF} = \\frac{\\text{Total Operational Run Time}}{\\text{Breakdown Count}}\\) and \\(\\text{MTTR} = \\frac{\\text{Total Corrective Repair Time}}{\\text{Breakdown Count}}\\).</li>

                            <li><strong>Variables:</strong> Total uptime hours, repair hours.</li>

                            <li><strong>Lean Toolchain:</strong> TPM Autonomous Maintenance checklists \(\rightarrow\) parameter tracking charts \(\rightarrow\) preventive scheduling.</li>

                        </ul>

                    </div>

                </div>

            </div>

        `

    },

    'revenue': {

        title: 'Annual Revenue (₹ Crores)',

        body: `

            <p>Representing the annual net sales turnover of the process division or plant. It serves as the baseline to calculate the Cost of Poor Quality (COPQ) as a percentage of overall business operations.</p>

            <h4>Apex Electro-Tech Reference:</h4>

            <p>Apex has an annual revenue of <strong>₹100 Cr</strong>.</p>

        `

    },

    'prevention': {

        title: 'Prevention Costs',

        body: `

            <p>Investments made to prevent defects or quality failures from occurring in the first place. These are front-end design, audit, and training costs.</p>

            <h4>Examples:</h4>

            <ul>

                <li>Operator cross-training programs.</li>

                <li>Design reviews (DFMEA, DFMA).</li>

                <li>Standard Work documentation and audits.</li>

                <li>Thermocouple calibration standards development.</li>

            </ul>

        `

    },

    'appraisal': {

        title: 'Appraisal Costs',

        body: `

            <p>Costs incurred to inspect, measure, and audit products or materials to evaluate conformance with spec limits.</p>

            <h4>Examples:</h4>

            <ul>

                <li>Final testing equipment and calibration.</li>

                <li>Quality control inspector wages.</li>

                <li>In-process measurement sensors and barcode match tooling.</li>

            </ul>

        `

    },

    'internal': {

        title: 'Internal Failure Costs',

        body: `

            <p>Costs generated by defects caught <em>before</em> the product leaves the facility. These represent direct waste, scrap, and rework labor costs.</p>

            <h4>Examples:</h4>

            <ul>

                <li>Scrap circuit boards.</li>

                <li>Rework loop labor at soldering stations.</li>

                <li>Re-testing failed assemblies.</li>

            </ul>

        `

    },

    'external': {

        title: 'External Failure Costs (Visible Tip)',

        body: `

            <p>Costs created when defects reach the customer. These represent the visible tip of the COPQ Iceberg and carry the heaviest financial and brand consequences.</p>

            <h4>Examples:</h4>

            <ul>

                <li>Warranty replacement claims.</li>

                <li>Product returns and logistics.</li>

                <li>Lost customer accounts and goodwill.</li>

            </ul>

        `

    },

    'periods': {

        title: 'Process Stations (Check Sheet Columns)',

        body: `

            <p>Comma-separated list of individual columns representing the sequential process steps (stations) on the checksheet. Defect tallies will be stratified by these stations to identify the defect birthplace.</p>

            <h4>Format:</h4>

            <p>Separate stations with commas, e.g., <code>Station 1: Reflow Paste, Station 2: Solder Assembly, Station 3: Avionics Testing, Station 4: Final Inspection</code>.</p>

        `

    },

    'defect-categories': {

        title: 'Defect Categories (Prior Categories)',

        body: `

            <p>A list of failure modes that operators will observe. The categories must be agreed upon <em>before</em> data collection starts to prevent selection bias.</p>

            <h4>Apex Electro-Tech Example:</h4>

            <p>Includes *Solder Joint Fracture*, *Calibration Drift*, *Enclosure Scratch*, etc.</p>

        `

    },

    'tally-input': {

        title: 'Check Sheet Data Tally (Defects by Station)',

        body: `

            <p>Enter the numeric defect occurrences logged in real time at the specific station where they are caught. This allows simultaneous defect prioritization and birthplace stratification.</p>

            <h4>Data Format:</h4>

            <p>Input integers \\(\\ge 0\\).</p>

        `

    },

    'fishbone-category': {

        title: '6M Cause Category',

        body: `

            <p>Ishikawa structures brainstorming into 6 core operational categories to ensure all potential sources of process variation are explored:</p>

            <ul>

                <li><strong>Man (People):</strong> Operator training, fatigue, adherence to SOPs.</li>

                <li><strong>Machine (Equipment):</strong> Tooling wear, calibration, settings.</li>

                <li><strong>Method (Process):</strong> Speed, documentation, sequence steps.</li>

                <li><strong>Material (Inputs):</strong> Part dimensions, flux, wire gauge specs.</li>

                <li><strong>Measurement:</strong> Gauge capability, sensor errors.</li>

                <li><strong>Mother Nature (Env):</strong> Humidity, room temperature, lighting.</li>

            </ul>

        `

    },

    'fishbone-cause': {

        title: 'Brainstormed Cause Description',

        body: `

            <p>Enter a specific hypothesis of why a process variation could occur. Keep explanations concise and physical.</p>

            <h4>Apex Example:</h4>

            <p><code>Reflow oven zone 3 temperature fluctuation</code> (Machine) or <code>No joint torque pull-test in SOP</code> (Method).</p>

        `

    },

    'five-why': {

        title: '5-Why Root Cause Drill-down',

        body: `

            <p>For any hypothesized cause, ask "Why?" sequentially to trace back from secondary symptoms to the systemic organizational root cause.</p>

            <h4>Example Trace:</h4>

            <p>Reflow temp shifts (Why 1) → Thermocouple calibration scheduled too late (Why 2) → Maintenance techs overloaded (Why 3) → Understaffed department (Why 4) → Corporate budget constraints (Why 5 - Root Cause).</p>

        `

    },

    'cap-var': {

        title: 'Monitored Process Parameter',

        body: `

            <p>Enter the name of the continuous physical process parameter being evaluated for process capability (e.g. dimensions, temperature, pressure, torque).</p>

        `

    },

    'cap-unit': {

        title: 'Unit of Measure',

        body: `

            <p>Specify the unit of measurement (e.g. <code>°C</code>, <code>mm</code>, <code>Nm</code>, <code>kg/cm²</code>) to format chart axes and calculations.</p>

        `

    },

    'cap-station': {

        title: 'Monitored Process Station',

        body: `

            <p>Select which specific station this capability parameter is monitored at. Tying variables to specific stations connects processing conditions to local defect outputs.</p>

        `

    },

    'lsl': {

        title: 'Lower Specification Limit (LSL)',

        body: `

            <p>The lower tolerance limit allowed for product performance. Any measurement value below this boundary represents a failure.</p>

            <h4>Operational rule:</h4>

            <p>LSL is defined by design engineering requirements, not by the process itself.</p>

        `

    },

    'usl': {

        title: 'Upper Specification Limit (USL)',

        body: `

            <p>The upper tolerance limit allowed for product performance. Any measurement value exceeding this boundary represents a failure.</p>

        `

    },

    'cap-data': {

        title: 'Continuous Measurement Values',

        body: `

            <p>Paste a comma-separated list of numerical readings collected sequentially from process operations.</p>

            <h4>Data Format:</h4>

            <p>Numeric values separated by commas, e.g., <code>236.0, 237.5, 239.0, 236.2</code>.</p>

        `

    },

    'scatter-x': {

        title: 'X-Axis Parameter (Independent Variable)',

        body: `

            <p>The independent variable that you suspect causes changes in the defect rate (e.g. conveyor speed, ambient humidity, operator experience hours).</p>

        `

    },

    'scatter-y': {

        title: 'Y-Axis Parameter (Dependent Variable)',

        body: `

            <p>The dependent quality parameter or defect count that you suspect is affected by changes in variable X.</p>

        `

    },

    'scatter-data': {

        title: 'Bivariate Paired Data (X, Y)',

        body: `

            <p>Enter paired coordinates representational of process observations. Format as <code>X_value, Y_value</code> (one pair per line).</p>

            <h4>Example:</h4>

            <p><code>1.2, 242.1</code><br><code>1.4, 239.5</code></p>

        `

    },

    'ctrl-var': {

        title: 'SPC Monitored Variable',

        body: `

            <p>Enter the name of the parameter tracked over time on the Shewhart run control chart.</p>

        `

    },

    'ctrl-unit': {

        title: 'SPC Parameter Unit',

        body: `

            <p>Specify the unit of measure for tracking stability limits.</p>

        `

    },

    'ctrl-station': {

        title: 'SPC Monitored Station',

        body: `

            <p>Select which specific station this control chart tracks. Linking SPC parameters to specific stations helps isolate special-cause variation to the physical equipment or team at that process point.</p>

        `

    },

    'ctrl-data': {

        title: 'Time-Series Readings List',

        body: `

            <p>Enter the sequence of process measurements (one per line) tracked in run order to evaluate process stability over time.</p>

            <h4>Format:</h4>

            <p>One numeric reading per line. UCL (+3σ) and LCL (-3σ) are calculated from this series.</p>

        `

    },

    'strat-stations': {

        title: 'Stratification Locations',

        body: `

            <p>Process stations imported automatically from the Step 1 Check Sheet columns. Keeps the pipeline connected in real time.</p>

        `

    },

    'strat-counts': {

        title: 'Stratified Defect Counts',

        body: `

            <p>The sum of all defect types registered at this station, aggregated automatically from Step 1. Highlights where defects are born.</p>

        `

    }

};



let charts = {

    pareto: null,

    histogram: null,

    scatter: null,

    control: null

};



// Toggle Case Study Guide Collapsible

function toggleCaseGuide() {

    const body = document.getElementById('guide-body-content');

    const chev = document.getElementById('guide-chevron');

    body.classList.toggle('collapsed');

    if (body.classList.contains('collapsed')) {

        chev.className = 'fa-solid fa-chevron-down';

    } else {

        chev.className = 'fa-solid fa-chevron-up';

    }

}

window.toggleCaseGuide = toggleCaseGuide; // Make global



// Initialize Application

document.addEventListener('DOMContentLoaded', () => {

    // Render all static equations on the page

    if (window.renderMathInElement) {

        window.renderMathInElement(document.body, {

            delimiters: [

                {left: '$$', right: '$$', display: true},

                {left: '$', right: '$', display: false},

                {left: '\\(', right: '\\)', display: false},

                {left: '\\[', right: '\\]', display: true}

            ],

            throwOnError: false

        });

    }

    initSymptomInfoDefinitions();
    initNavigation();

    initSymptomSelector();

    initCOPQCalculator();

    initChecksheet();

    initFishbone();

    initCapability();

    initScatter();

    initControl();

    initStratification();

    initTemplateLoader();

    initPDFExporter();

    initManualDownloader();
    initDecisionEngine();

    renderPractitionerKnowledge();

    initInfoModals();

});



// Navigation Controller

function initNavigation() {

    const navLinks = document.querySelectorAll('.pipeline-nav a');

    navLinks.forEach(link => {

        link.addEventListener('click', (e) => {

            e.preventDefault();

            const stepId = link.getAttribute('data-step');

            navigateToStep(stepId);

        });

    });



    const targetStepButtons = document.querySelectorAll('.go-to-step-btn');

    targetStepButtons.forEach(btn => {

        btn.addEventListener('click', () => {

            const stepId = btn.getAttribute('data-target');

            navigateToStep(stepId);

        });

    });

}



function navigateToStep(stepId) {

    document.querySelectorAll('.pipeline-nav a').forEach(a => a.classList.remove('active'));

    const activeNav = document.querySelector(`.pipeline-nav a[data-step="${stepId}"]`);

    if (activeNav) activeNav.classList.add('active');



    document.querySelectorAll('.display-section').forEach(sec => sec.classList.remove('active'));

    const sectionTarget = stepId === 'welcome' ? 'sec-welcome' : (stepId === 'kb' ? 'sec-kb' : `sec-step${stepId}`);

    const activeSection = document.getElementById(sectionTarget);

    if (activeSection) activeSection.classList.add('active');



    setTimeout(() => {

        if (stepId == 2 && charts.pareto) charts.pareto.resize();

        if (stepId == 4 && charts.histogram) charts.histogram.resize();

        if (stepId == 5 && charts.scatter) charts.scatter.resize();

        if (stepId == 6 && charts.control) charts.control.resize();

    }, 50);

}



// Symptom Selector Diagnoser


function initSymptomInfoDefinitions() {
    const symptomsList = [
        'defects', 'output', 'leadtime', 'changeover', 'wip', 'motion', 'skills', 'oee', 'scrap', 'design',
        'infosilose', 'visuals', 'scheduling', 'planning', 'absenteeism', 'workdist', 'skillgap', 'downtime'
    ];

    symptomsList.forEach(key => {
        const diag = symptomDiagnoses[key];
        if (diag) {
            let detailedFormula = "";
            let detailedVars = "";
            let leanTools = "";

            if (key === 'defects') {
                detailedFormula = "\\text{First Pass Yield (FPY)} = \\prod Y_i = Y_1 \\times Y_2 \\times \\dots \\times Y_n";
                detailedVars = "\\(Y_i\\) (Yield of station \\(i\\)), \\(D\\) (Total defects), \\(P\\) (Production volume).";
                leanTools = "Check Sheet \\(\\rightarrow\\) Pareto Chart \\(\\rightarrow\\) Fishbone &amp; 5-Why \\(\\rightarrow\\) Poka-Yoke.";
            } else if (key === 'output') {
                detailedFormula = "T = \\frac{\\text{Net Available Work Time}}{\\text{Customer Demand Rate}}, \\text{Line Efficiency} = \\frac{\\sum C_{t,i}}{N \\times \\max(C_{t,i})} \\times 100";
                detailedVars = "\\(T\\) (Takt Time), \\(C_{t,i}\\) (Cycle Time of station \\(i\\)), \\(N\\) (Operator count).";
                leanTools = "Cycle Time profiling \\(\\rightarrow\\) Takt analysis \\(\\rightarrow\\) Yamazumi balance redistributions.";
            } else if (key === 'leadtime') {
                detailedFormula = "\\text{Process Lead Time (LT)} = \\frac{\\text{Work-In-Progress (WIP)}}{\\text{Throughput Rate}}, \\text{PCE} = \\frac{\\text{Value-Add Time (VAT)}}{\\text{Total Lead Time (LT)}} \\times 100";
                detailedVars = "\\(WIP\\) (Unfinished parts), \\(VAT\\) (Value-added processing time), \\(LT\\) (Lead time).";
                leanTools = "Value Stream Mapping (VSM) \\(\\rightarrow\\) physical cell layouts \\(\\rightarrow\\) Kanban pull system.";
            } else if (key === 'changeover') {
                detailedFormula = "\\text{Setup Loss Rate} = \\frac{\\text{Changeover Hours}}{\\text{Total Available Hours}} \\times 100";
                detailedVars = "Internal setup time (machine stopped) vs. External setup time (done while running).";
                leanTools = "SMED (Single-Minute Exchange of Die) task separation \\(\\rightarrow\\) quick-release fittings.";
            } else if (key === 'wip') {
                detailedFormula = "K = \\frac{\\text{Daily Demand} \\times \\text{Lead Time} \\times (1 + \\alpha)}{\\text{Container Capacity}}";
                detailedVars = "\\(\\alpha\\) (Safety factor, 0.1 to 0.2), Lead Time (replenishment cycle hours).";
                leanTools = "Kanban loop sizing \\(\\rightarrow\\) visual inventory limits (5S) \\(\\rightarrow\\) pull-based dispatch.";
            } else if (key === 'motion') {
                detailedFormula = "D = \\sum (F_i \\times d_i)";
                detailedVars = "\\(F_i\\) (Walk frequency per shift), \\(d_i\\) (Walk distance in meters).";
                leanTools = "Spaghetti Diagram mapping \\(\\rightarrow\\) U-shaped cell design \\(\\rightarrow\\) point-of-use shadow boards.";
            } else if (key === 'skills') {
                detailedFormula = "\\text{Cross-Training Index} = \\frac{\\sum \\text{Operator Skill Competency Levels}}{\\text{Total Required Station Competencies}}";
                detailedVars = "Skill Levels (1: Trainee, 2: Run solo, 3: Certified trainer).";
                leanTools = "Cross-training Skill Matrix \\(\\rightarrow\\) Standard Work SOP checklists.";
            } else if (key === 'oee') {
                detailedFormula = "\\text{OEE} = \\text{Availability} \\times \\text{Performance} \\times \\text{Quality}";
                detailedVars = "\\text{Availability} = \\frac{\\text{Run Time}}{\\text{Planned Time}}, \\text{Performance} = \\frac{\\text{Ideal Cycle Time} \\times \\text{Parts}}{\\text{Run Time}}, \\text{Quality} = \\frac{\\text{Good Parts}}{\\text{Total Parts}}.";
                leanTools = "OEE log sheets \\(\\rightarrow\\) Six Big Losses auditing \\(\\rightarrow\\) TPM Autonomous Maintenance.";
            } else if (key === 'scrap') {
                detailedFormula = "\\text{Scrap Rate} = \\frac{\\text{Scrap Weight}}{\\text{Input Weight}} \\times 100";
                detailedVars = "Scrap weight, total input material weight, unit material costs.";
                leanTools = "Scrap tracking by process zone \\(\\rightarrow\\) Parameter SPC charts \\(\\rightarrow\\) process centering.";
            } else if (key === 'design') {
                detailedFormula = "C_p = \\frac{\\text{USL} - \\text{LSL}}{6\\sigma}, C_{pk} = \\min\\left(\\frac{\\text{USL} - \\mu}{3\\sigma}, \\frac{\\mu - \\text{LSL}}{3\\sigma}\\right)";
                detailedVars = "\\(\\text{USL}/\\text{LSL}\\) (Spec limits), \\(\\mu\\) (Process Mean), \\(\\sigma\\) (Standard Deviation).";
                leanTools = "House of Quality (HOQ) design checks \\(\\rightarrow\\) capability studies \\(\\rightarrow\\) tolerance widening.";
            } else if (key === 'infosilose') {
                detailedFormula = "\\text{Info Lead Time} = \\sum (\\text{Processing Time} + \\text{Inbox queue time})";
                detailedVars = "Communication step processing hours vs. waiting queue delays.";
                leanTools = "Communication VSM \\(\\rightarrow\\) daily Obeya (War Room) visual standups.";
            } else if (key === 'visuals') {
                detailedFormula = "\\text{5S Score} = \\frac{\\text{Standards Met}}{\\text{Total Standards Audited}} \\times 100, \\text{Search Time } \\le 30\\text{s}";
                detailedVars = "5S Standards (Sort, Straighten, Shine, Standardize, Sustain).";
                leanTools = "5S baseline audits \\(\\rightarrow\\) shadow boards \\(\\rightarrow\\) Andon alarms \\(\\rightarrow\\) floor limits.";
            } else if (key === 'scheduling') {
                detailedFormula = "\\text{Inventory Turns} = \\frac{\\text{Cost of Goods Sold}}{\\text{Average Inventory Value}}";
                detailedVars = "COGS, Average on-hand warehouse value.";
                leanTools = "Inventory Turns audits \\(\\rightarrow\\) Heijunka (Production Leveling) \\(\\rightarrow\\) Kanban pull scheduling.";
            } else if (key === 'planning') {
                detailedFormula = "\\text{Capacity Load Ratio} = \\frac{\\text{Required Work Hours}}{\\text{Available Capacity Hours}}";
                detailedVars = "Required workload hours, available machine/shift hours, target run efficiency.";
                leanTools = "Capacity profiling \\(\\rightarrow\\) S&OP checklist alignments.";
            } else if (key === 'absenteeism') {
                detailedFormula = "\\text{Absenteeism Rate} = \\frac{\\text{Absent Hours}}{\\text{Scheduled Hours}} \\times 100";
                detailedVars = "Absent hours, scheduled work hours.";
                leanTools = "Skill Matrix scheduling \\(\\rightarrow\\) visual SOP checklists \\(\\rightarrow\\) operator floaters.";
            } else if (key === 'workdist') {
                detailedFormula = "\\text{Line Balance Loss} = 100\\% - \\text{Line Efficiency}";
                detailedVars = "Cycle times of operators, bottleneck station cycle times.";
                leanTools = "Time studies \\(\\rightarrow\\) Yamazumi balance charts \\(\\rightarrow\\) work redistribution.";
            } else if (key === 'skillgap') {
                detailedFormula = "\\text{Training Efficiency Index} = \\frac{\\text{Post-training Defect Rate}}{\\text{Baseline Defect Rate}}";
                detailedVars = "Operator defect count per shift, training hours.";
                leanTools = "TWI Job Instruction checklists \\(\\rightarrow\\) visual SOPs \\(\\rightarrow\\) mistake-proofing checks.";
            } else if (key === 'downtime') {
                detailedFormula = "\\text{MTBF} = \\frac{\\text{Total Run Time}}{\\text{Breakdowns}}, \\text{MTTR} = \\frac{\\text{Total Repair Time}}{\\text{Breakdowns}}";
                detailedVars = "Total operational uptime hours, repair downtime hours, breakdown frequency.";
                leanTools = "MTBF/MTTR tracking \\(\\rightarrow\\) TPM Autonomous Maintenance \\(\\rightarrow\\) predictive SPC tracking.";
            }

            infoDefinitions['symptom-' + key] = {
                title: 'Diagnostic Details: ' + key.charAt(0).toUpperCase() + key.slice(1),
                body: `
                    <p><strong>Primary Symptom:</strong> ${key.charAt(0).toUpperCase() + key.slice(1)}</p>
                    <p><strong>Operational Impact:</strong> ${diag.step1.split(':')[0] || 'Process constraint'}</p>
                    
                    <div class="case-box">
                        <strong>Real Case Study Analogy:</strong><br>
                        ${diag.case}
                    </div>

                    <div class="formula-box">
                        <strong>Key Diagnostic Formula:</strong><br>
                        \\[${detailedFormula}\\]<br>
                        <span style="font-size: 11px; color: #555; display: block; margin-top: 6px;"><strong>Variables:</strong> ${detailedVars}</span>
                    </div>

                    <h4>Diagnostic &amp; Intervention Sequence:</h4>
                    <ol>
                        <li><strong>Diagnostic Step:</strong> ${diag.step1}</li>
                        <li><strong>Lean Intervention:</strong> ${diag.step2}</li>
                        <li><strong>Advanced Level:</strong> ${diag.step3}</li>
                    </ol>

                    <p><strong>Target Pipeline Tool:</strong> Directs your focus to <strong>Step ${diag.targetStep}</strong> of the 7 QC Tools sequential pipeline.</p>
                `
            };
        }
    });
}

function initSymptomSelector() {

    const select = document.getElementById('symptom-select');

    const resultBox = document.getElementById('diagnosis-result');

    const startBtn = document.getElementById('start-sequence-btn');



    select.addEventListener('change', () => {

        const value = select.value;

        appState.selectedSymptom = value;

        const diag = symptomDiagnoses[value];

        

        if (diag) {

            document.getElementById('diag-step-1').innerHTML = diag.step1;

            document.getElementById('diag-step-2').innerHTML = diag.step2;

            document.getElementById('diag-step-3').innerHTML = diag.step3;

            document.getElementById('diag-case-text').innerHTML = diag.case;

            const detailBtn = document.getElementById('symptom-detail-info-btn');
            if (detailBtn) {
                detailBtn.setAttribute('data-info', 'symptom-' + value);
            }

            resultBox.classList.remove('hidden');

            

            // Render Math equations using KaTeX if available

            if (window.renderMathInElement) {

                window.renderMathInElement(resultBox, {

                    delimiters: [

                        {left: '$$', right: '$$', display: true},

                        {left: '$', right: '$', display: false},

                        {left: '\\(', right: '\\)', display: false},

                        {left: '\\[', right: '\\]', display: true}

                    ],

                    throwOnError: false

                });

            }



            startBtn.onclick = () => {

                navigateToStep(diag.targetStep);

            };

        }

    });

}



// COPQ Iceberg Calculator

function initCOPQCalculator() {

    const calculateBtn = document.getElementById('calculate-copq-btn');

    const copqInputs = ['copq-revenue', 'copq-prevention', 'copq-appraisal', 'copq-internal', 'copq-external'];

    

    copqInputs.forEach(id => {

        const inputEl = document.getElementById(id);

        if (inputEl) {

            inputEl.addEventListener('input', () => {

                calculateCOPQ();

            });

        }

    });



    calculateBtn.addEventListener('click', () => {

        calculateCOPQ();

    });

    calculateCOPQ(); // Run initial calculation

}



function calculateCOPQ() {

    const rev = parseFloat(document.getElementById('copq-revenue').value) || 100;

    const prev = parseFloat(document.getElementById('copq-prevention').value) || 0;

    const app = parseFloat(document.getElementById('copq-appraisal').value) || 0;

    const intFail = parseFloat(document.getElementById('copq-internal').value) || 0;

    const extFail = parseFloat(document.getElementById('copq-external').value) || 0;



    const totalCOPQ = prev + app + intFail + extFail;

    const pctRev = (totalCOPQ / rev) * 100;

    const ratio = prev > 0 ? (app / prev) : 0;



    // Display numbers

    document.getElementById('copq-total-val').innerText = `₹${totalCOPQ.toFixed(1)} Cr`;

    document.getElementById('copq-percent-val').innerText = `${pctRev.toFixed(1)}%`;

    document.getElementById('copq-ratio-val').innerText = ratio.toFixed(2);



    // Update Iceberg labels

    const hiddenTotal = prev + app + intFail;

    const svgVisibleVal = document.getElementById('svg-visible-val');

    const svgHiddenVal = document.getElementById('svg-hidden-val');

    if (svgVisibleVal) svgVisibleVal.textContent = `₹${extFail.toFixed(1)} Cr`;

    if (svgHiddenVal) svgHiddenVal.textContent = `₹${hiddenTotal.toFixed(1)} Cr`;



    document.getElementById('copq-results-card').classList.remove('hidden');

}



// Step 1: Check Sheet Builder

function initChecksheet() {

    const addCatBtn = document.getElementById('add-category-btn');

    const calculateBtn = document.getElementById('calculate-checksheet-btn');

    const periodsInput = document.getElementById('checksheet-periods');



    const updateConfigs = () => {

        appState.checksheet.periods = periodsInput.value.split(',').map(s => s.trim()).filter(s => s !== '');

        

        appState.checksheet.categories.forEach(cat => {

            if (!appState.checksheet.data[cat]) {

                appState.checksheet.data[cat] = [];

            }

            while (appState.checksheet.data[cat].length < appState.checksheet.periods.length) {

                appState.checksheet.data[cat].push(0);

            }

            if (appState.checksheet.data[cat].length > appState.checksheet.periods.length) {

                appState.checksheet.data[cat] = appState.checksheet.data[cat].slice(0, appState.checksheet.periods.length);

            }

        });



        renderChecksheetTables();

        populateCapabilityStations();

        populateControlStations();

        compileChecksheetData();

    };



    periodsInput.addEventListener('input', updateConfigs);



    addCatBtn.addEventListener('click', () => {

        const catName = prompt("Enter new defect category name:");

        if (catName && catName.trim() !== '') {

            const cleanName = catName.trim();

            if (!appState.checksheet.categories.includes(cleanName)) {

                appState.checksheet.categories.push(cleanName);

                appState.checksheet.data[cleanName] = new Array(appState.checksheet.periods.length).fill(0);

                renderChecksheetTables();

                compileChecksheetData();

            }

        }

    });



    calculateBtn.addEventListener('click', () => {

        compileChecksheetData();

    });



    renderChecksheetTables();

    populateCapabilityStations();

    populateControlStations();

    compileChecksheetData();

}



function renderChecksheetTables() {

    // 1. Render Categories Table

    const catTbody = document.querySelector('#checksheet-categories-table tbody');

    catTbody.innerHTML = '';

    appState.checksheet.categories.forEach((cat, index) => {

        const tr = document.createElement('tr');

        tr.innerHTML = `

            <td><strong>${cat}</strong></td>

            <td><button class="btn btn-danger btn-sm delete-cat-btn" data-index="${index}"><i class="fa-solid fa-trash"></i></button></td>

        `;

        catTbody.appendChild(tr);

    });



    document.querySelectorAll('.delete-cat-btn').forEach(btn => {

        btn.addEventListener('click', () => {

            const index = btn.getAttribute('data-index');

            const catToDelete = appState.checksheet.categories[index];

            appState.checksheet.categories.splice(index, 1);

            delete appState.checksheet.data[catToDelete];

            renderChecksheetTables();

            compileChecksheetData();

        });

    });



    // 2. Render Tally Input Form

    const tallyTable = document.getElementById('tally-input-table');

    const thead = tallyTable.querySelector('thead');

    const tbody = tallyTable.querySelector('tbody');



    thead.innerHTML = '';

    const headerRow = document.createElement('tr');

    headerRow.innerHTML = `<th>Defect Type <i class="fa-solid fa-circle-info info-btn" data-info="tally-input"></i></th>`;

    appState.checksheet.periods.forEach(p => {

        headerRow.innerHTML += `<th>${p}</th>`;

    });

    thead.appendChild(headerRow);



    tbody.innerHTML = '';

    appState.checksheet.categories.forEach(cat => {

        const tr = document.createElement('tr');

        tr.innerHTML = `<td><strong>${cat}</strong></td>`;

        appState.checksheet.periods.forEach((col, colIdx) => {

            const val = appState.checksheet.data[cat] ? (appState.checksheet.data[cat][colIdx] || 0) : 0;

            tr.innerHTML += `

                <td>

                    <input type="number" min="0" class="form-control form-control-sm tally-val-input" 

                           data-cat="${cat}" data-colidx="${colIdx}" value="${val}" style="width: 70px;">

                </td>`;

        });

        tbody.appendChild(tr);

    });



    document.querySelectorAll('.tally-val-input').forEach(input => {

        input.addEventListener('input', () => {

            const cat = input.getAttribute('data-cat');

            const colIdx = parseInt(input.getAttribute('data-colidx'));

            const val = Math.max(0, parseInt(input.value) || 0);

            if (appState.checksheet.data[cat]) {

                appState.checksheet.data[cat][colIdx] = val;

            }

            compileChecksheetData();

        });

    });

}



function compileChecksheetData() {

    let grandTotal = 0;

    const totals = [];



    appState.checksheet.categories.forEach(cat => {

        const rowSum = appState.checksheet.data[cat].reduce((acc, curr) => acc + curr, 0);

        totals.push({ name: cat, total: rowSum });

        grandTotal += rowSum;

    });



    appState.checksheet.compiled = totals.map(item => {

        return {

            name: item.name,

            total: item.total,

            rate: grandTotal > 0 ? ((item.total / grandTotal) * 100) : 0

        };

    });



    appState.checksheet.compiled.sort((a, b) => b.total - a.total);



    const summaryTbody = document.querySelector('#checksheet-summary-table tbody');

    summaryTbody.innerHTML = '';

    appState.checksheet.compiled.forEach(item => {

        const tr = document.createElement('tr');

        tr.innerHTML = `

            <td><strong>${item.name}</strong></td>

            <td>${item.total}</td>

            <td>${item.rate.toFixed(1)}%</td>

        `;

        summaryTbody.appendChild(tr);

    });



    document.getElementById('checksheet-result-card').classList.remove('hidden');



    updateParetoAnalysis(grandTotal);
    updateParetoQualitativeAdvice(grandTotal);

    if (appState.checksheet.compiled.length > 0) {

        setFishboneEffect(appState.checksheet.compiled[0].name);

    }



    // CONNECTED FLOW: Pipeline Column-wise Station Totals directly to Step 7 Stratification Flowchart

    const stationTotals = [];

    appState.checksheet.periods.forEach((st, colIdx) => {

        let colSum = 0;

        appState.checksheet.categories.forEach(cat => {

            colSum += appState.checksheet.data[cat] ? (appState.checksheet.data[cat][colIdx] || 0) : 0;

        });

        stationTotals.push({ name: st, count: colSum });

    });

    appState.stratification.stations = stationTotals;



    // Refresh Step 7 Visuals

    renderStratificationTable();

    processStratification();

}



// Step 2: Pareto Chart

function updateParetoAnalysis(grandTotal) {

    if (appState.checksheet.compiled.length === 0) return;



    const tbody = document.querySelector('#pareto-table tbody');

    tbody.innerHTML = '';



    let runningSum = 0;

    let runningPct = 0;

    const chartLabels = [];

    const chartCounts = [];

    const chartCumPercentages = [];

    let vitalFew = [];

    let cutOffFound = false;



    appState.checksheet.compiled.forEach((item, index) => {

        runningSum += item.total;

        runningPct = grandTotal > 0 ? ((runningSum / grandTotal) * 100) : 0;

        const cumPctStr = runningPct.toFixed(1) + '%';



        const tr = document.createElement('tr');

        tr.innerHTML = `

            <td>${index + 1}</td>

            <td><strong>${item.name}</strong></td>

            <td>${item.total}</td>

            <td>${item.rate.toFixed(1)}%</td>

            <td>${cumPctStr}</td>

        `;

        tbody.appendChild(tr);



        chartLabels.push(item.name);

        chartCounts.push(item.total);

        chartCumPercentages.push(runningPct);



        if (!cutOffFound) {

            vitalFew.push(item.name);

            if (runningPct >= 80) cutOffFound = true;

        }

    });



    renderParetoChart(chartLabels, chartCounts, chartCumPercentages);



    const verdictText = document.getElementById('pareto-verdict-text');

    verdictText.innerHTML = `

        <strong>Vital Few identified (80% Pareto boundary):</strong> ${vitalFew.join(', ')}.<br>

        Focus 5-Why root-cause investigation on 

        <strong>${vitalFew[0]}</strong> first.

    `;

}



function renderParetoChart(labels, counts, cumPct) {

    const ctx = document.getElementById('pareto-chart').getContext('2d');

    if (charts.pareto) charts.pareto.destroy();



    charts.pareto = new Chart(ctx, {

        type: 'bar',

        data: {

            labels: labels,

            datasets: [

                {

                    label: 'Defect Count',

                    data: counts,

                    backgroundColor: '#1A3A5C',

                    borderColor: '#102A45',

                    borderWidth: 1,

                    yAxisID: 'y'

                },

                {

                    label: 'Cumulative Percentage',

                    data: cumPct,

                    type: 'line',

                    borderColor: '#E65100',

                    borderWidth: 3,

                    fill: false,

                    tension: 0.1,

                    yAxisID: 'y1'

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            scales: {

                y: {

                    type: 'linear',

                    position: 'left',

                    title: { display: true, text: 'Defect Count' }

                },

                y1: {

                    type: 'linear',

                    position: 'right',

                    min: 0,

                    max: 100,

                    title: { display: true, text: 'Cumulative Percentage (%)' }

                }

            }

        }

    });

}



// Step 3: Fishbone & 5-Why

function initFishbone() {

    const addCauseBtn = document.getElementById('add-cause-btn');

    const saveWhyBtn = document.getElementById('save-5why-btn');

    const causeSelect5Why = document.getElementById('cause-select-5why');



    addCauseBtn.addEventListener('click', () => {

        const category = document.getElementById('cause-category').value;

        const textInput = document.getElementById('cause-text');

        const textVal = textInput.value.trim();



        if (textVal) {

            const newId = 'c_' + Date.now();

            appState.fishbone.causes.push({

                id: newId,

                category: category,

                text: textVal,

                why1: '', why2: '', why3: '', why4: '', why5: '',

                root: ''

            });

            textInput.value = '';

            updateFishboneVisuals();

            populate5WhyDropdown();

        }

    });



    causeSelect5Why.addEventListener('change', () => {

        const causeId = causeSelect5Why.value;

        const cause = appState.fishbone.causes.find(c => c.id === causeId);

        

        if (cause) {

            document.getElementById('why-cause-name').innerText = cause.text;

            document.getElementById('why1').value = cause.why1 || '';

            document.getElementById('why2').value = cause.why2 || '';

            document.getElementById('why3').value = cause.why3 || '';

            document.getElementById('why4').value = cause.why4 || '';

            document.getElementById('why5').value = cause.why5 || '';

            document.getElementById('container-5why').classList.remove('hidden');

        }

    });



    saveWhyBtn.addEventListener('click', () => {

        const causeId = causeSelect5Why.value;

        const causeIndex = appState.fishbone.causes.findIndex(c => c.id === causeId);



        if (causeIndex !== -1) {

            const why5Val = document.getElementById('why5').value.trim();

            appState.fishbone.causes[causeIndex].why1 = document.getElementById('why1').value;

            appState.fishbone.causes[causeIndex].why2 = document.getElementById('why2').value;

            appState.fishbone.causes[causeIndex].why3 = document.getElementById('why3').value;

            appState.fishbone.causes[causeIndex].why4 = document.getElementById('why4').value;

            appState.fishbone.causes[causeIndex].why5 = why5Val;

            appState.fishbone.causes[causeIndex].root = why5Val;



            renderRootCausesTable();
    updateFiveWhyQualitativeAdvice();

            updateFishboneVisuals();

            document.getElementById('container-5why').classList.add('hidden');

            causeSelect5Why.value = '';

        }

    });



    updateFishboneVisuals();

    populate5WhyDropdown();

    renderRootCausesTable();
    updateFiveWhyQualitativeAdvice();

}



// Re-sync fishbone head

function setFishboneEffect(name) {

    appState.fishbone.effect = name;

    document.getElementById('fishbone-effect-text').textContent = name.length > 18 ? name.substring(0, 16) + '...' : name;

}



function updateFishboneVisuals() {

    const categories = ['man', 'machine', 'method', 'material', 'measurement', 'environment'];

    

    categories.forEach(cat => {

        const group = document.getElementById(`svg-causes-${cat}`);

        if (!group) return;

        group.innerHTML = '';



        const causes = appState.fishbone.causes.filter(c => c.category === cat);

        

        let baseStartX, baseEndX, baseStartY, baseEndY;

        if (cat === 'man') { baseStartX = 200; baseEndX = 320; baseStartY = 250; baseEndY = 60; }

        else if (cat === 'machine') { baseStartX = 420; baseEndX = 540; baseStartY = 250; baseEndY = 60; }

        else if (cat === 'method') { baseStartX = 640; baseEndX = 760; baseStartY = 250; baseEndY = 60; }

        else if (cat === 'material') { baseStartX = 200; baseEndX = 320; baseStartY = 250; baseEndY = 440; }

        else if (cat === 'measurement') { baseStartX = 420; baseEndX = 540; baseStartY = 250; baseEndY = 440; }

        else if (cat === 'environment') { baseStartX = 640; baseEndX = 760; baseStartY = 250; baseEndY = 440; }



        causes.forEach((cause, idx) => {

            if (idx >= 3) return; 



            const ratio = (idx + 1) / (causes.length + 1);

            const bx = baseStartX + (baseEndX - baseStartX) * ratio;

            const by = baseStartY + (baseEndY - baseStartY) * ratio;



            const lineLength = 55;

            const lineEndX = bx - lineLength;

            

            const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');

            line.setAttribute('x1', bx);

            line.setAttribute('y1', by);

            line.setAttribute('x2', lineEndX);

            line.setAttribute('y2', by);

            line.setAttribute('class', 'fishbone-sub-bone');

            group.appendChild(line);



            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');

            text.setAttribute('x', lineEndX - 5);

            text.setAttribute('y', by + 3);

            text.setAttribute('text-anchor', 'end');

            text.setAttribute('class', 'fishbone-cause-text');

            text.textContent = cause.text.length > 20 ? cause.text.substring(0, 18) + '...' : cause.text;

            

            if (cause.root) {

                text.setAttribute('fill', '#FFB74D');

                text.textContent += ' *';

            }

            group.appendChild(text);

        });

    });

}



function populate5WhyDropdown() {

    const select = document.getElementById('cause-select-5why');

    select.innerHTML = '<option value="" disabled selected>-- Choose a cause --</option>';



    appState.fishbone.causes.forEach(cause => {

        select.innerHTML += `<option value="${cause.id}">[${cause.category.toUpperCase()}] ${cause.text}</option>`;

    });

}



function renderRootCausesTable() {

    const tbody = document.querySelector('#root-causes-table tbody');

    tbody.innerHTML = '';



    const confirmedRoots = appState.fishbone.causes.filter(c => c.root && c.root.trim() !== '');



    if (confirmedRoots.length === 0) {

        tbody.innerHTML = `<tr><td colspan="4" class="text-center">No root causes added yet. Use the fields above to brainstorm and drill down.</td></tr>`;

        return;

    }



    confirmedRoots.forEach(cause => {

        const tr = document.createElement('tr');

        tr.innerHTML = `

            <td><span class="badge badge-blue">${cause.category.toUpperCase()}</span></td>

            <td><strong>${cause.text}</strong></td>

            <td><span style="color: var(--accent); font-weight: 600;">${cause.root}</span></td>

            <td><button class="btn btn-danger btn-sm remove-root-btn" data-id="${cause.id}"><i class="fa-solid fa-trash"></i></button></td>

        `;

        tbody.appendChild(tr);

    });



    document.querySelectorAll('.remove-root-btn').forEach(btn => {

        btn.addEventListener('click', () => {

            const id = btn.getAttribute('data-id');

            const idx = appState.fishbone.causes.findIndex(c => c.id === id);

            if (idx !== -1) {

                appState.fishbone.causes[idx].why1 = '';

                appState.fishbone.causes[idx].why2 = '';

                appState.fishbone.causes[idx].why3 = '';

                appState.fishbone.causes[idx].why4 = '';

                appState.fishbone.causes[idx].why5 = '';

                appState.fishbone.causes[idx].root = '';

                renderRootCausesTable();
    updateFiveWhyQualitativeAdvice();

                updateFishboneVisuals();

                populate5WhyDropdown();

            }

        });

    });

}



// Step 4: Histogram & Capability

function initCapability() {

    const calculateBtn = document.getElementById('calculate-capability-btn');

    document.getElementById('capability-data-input').value = appState.capability.data.join(', ');



    const varNameInput = document.getElementById('capability-var-name');

    const varUnitInput = document.getElementById('capability-var-unit');

    const stationSelect = document.getElementById('capability-station-select');

    const lslInput = document.getElementById('lsl-input');

    const uslInput = document.getElementById('usl-input');

    const dataInput = document.getElementById('capability-data-input');



    const updateConfigs = () => {

        appState.capability.varName = varNameInput.value.trim() || 'Reflow Peak Temperature';

        appState.capability.varUnit = varUnitInput.value.trim() || '°C';

        appState.capability.station = stationSelect.value;

        runCapabilityCalculations();

    };



    varNameInput.addEventListener('input', updateConfigs);

    varUnitInput.addEventListener('input', updateConfigs);

    stationSelect.addEventListener('change', updateConfigs);

    lslInput.addEventListener('input', () => runCapabilityCalculations());

    uslInput.addEventListener('input', () => runCapabilityCalculations());

    dataInput.addEventListener('input', () => runCapabilityCalculations());



    calculateBtn.addEventListener('click', () => {

        runCapabilityCalculations();

    });



    runCapabilityCalculations();

}



function populateCapabilityStations() {

    const select = document.getElementById('capability-station-select');

    if (!select) return;

    

    const currentVal = select.value || appState.capability.station;

    select.innerHTML = '';

    

    appState.checksheet.periods.forEach(st => {

        const option = document.createElement('option');

        option.value = st;

        option.innerText = st;

        if (st === currentVal) {

            option.selected = true;

        }

        select.appendChild(option);

    });

}



function runCapabilityCalculations() {

    const lsl = parseFloat(document.getElementById('lsl-input').value);

    const usl = parseFloat(document.getElementById('usl-input').value);

    const dataRaw = document.getElementById('capability-data-input').value;



    const values = dataRaw.split(',')

                          .map(v => parseFloat(v.trim()))

                          .filter(v => !isNaN(v));



    if (values.length < 5) {

        alert("Please input at least 5 numerical measurement values.");

        return;

    }



    appState.capability.data = values;

    appState.capability.lsl = lsl;

    appState.capability.usl = usl;



    const mean = values.reduce((a, b) => a + b, 0) / values.length;

    const sqDiffSum = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0);

    const sampleVariance = sqDiffSum / (values.length - 1);

    const stdDev = Math.sqrt(sampleVariance);



    const cp = (usl - lsl) / (6 * stdDev);

    const cpu = (usl - mean) / (3 * stdDev);

    const cpl = (mean - lsl) / (3 * stdDev);

    const cpk = Math.min(cpu, cpl);



    document.getElementById('cap-mean').innerText = mean.toFixed(2);

    document.getElementById('cap-sd').innerText = stdDev.toFixed(2);

    document.getElementById('cap-cp').innerText = cp.toFixed(2);

    document.getElementById('cap-cpk').innerText = cpk.toFixed(2);



    const verdictBox = document.getElementById('cap-verdict-box');

    const verdictText = document.getElementById('cap-verdict-text');



    if (cpk >= 1.33) {

        verdictBox.style.backgroundColor = 'var(--success-light)';

        verdictBox.style.borderColor = '#C8E6C9';

        verdictBox.style.color = 'var(--success)';

        verdictText.innerHTML = `Process is <strong>CAPABLE</strong> ($C_{pk} \\ge 1.33$). Standard distribution variance limits are stable.`;

    } else {

        verdictBox.style.backgroundColor = 'var(--danger-light)';

        verdictBox.style.borderColor = '#FFCDD2';

        verdictBox.style.color = 'var(--danger)';

        verdictText.innerHTML = `Process is <strong>NOT CAPABLE</strong> ($C_{pk} < 1.33$). Process variation bounds exceed design limits.`;

    }



    document.getElementById('capability-results').classList.remove('hidden');
    updateCapabilityQualitativeAdvice(cp, cpk, mean, stdDev);



    renderHistogramChart(values, mean, stdDev, lsl, usl);

}



function renderHistogramChart(values, mean, stdDev, lsl, usl) {

    const ctx = document.getElementById('histogram-chart').getContext('2d');

    if (charts.histogram) charts.histogram.destroy();



    const nBins = Math.ceil(Math.log2(values.length) + 1) + 2;

    const minVal = Math.min(...values, lsl) - 1.5;

    const maxVal = Math.max(...values, usl) + 1.5;

    const binWidth = (maxVal - minVal) / nBins;



    const binCounts = new Array(nBins).fill(0);

    const binLabels = [];



    for (let i = 0; i < nBins; i++) {

        const start = minVal + i * binWidth;

        const end = start + binWidth;

        binLabels.push(((start + end) / 2).toFixed(1));

    }



    values.forEach(v => {

        let binIdx = Math.floor((v - minVal) / binWidth);

        if (binIdx >= nBins) binIdx = nBins - 1;

        if (binIdx < 0) binIdx = 0;

        binCounts[binIdx]++;

    });



    const labelStr = `${appState.capability.varName} (${appState.capability.varUnit}) at ${appState.capability.station}`;



    charts.histogram = new Chart(ctx, {

        type: 'bar',

        data: {

            labels: binLabels,

            datasets: [{

                label: 'Frequency',

                data: binCounts,

                backgroundColor: '#00796B',

                borderColor: '#004D40',

                borderWidth: 1,

                barPercentage: 1.0,

                categoryPercentage: 1.0

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            scales: {

                y: { title: { display: true, text: 'Frequency' } },

                x: { title: { display: true, text: labelStr } }

            }

        }

    });

}



// Step 5: Scatter Diagram

function initScatter() {

    const calculateBtn = document.getElementById('calculate-scatter-btn');

    document.getElementById('scatter-data-input').value = appState.scatter.data.map(d => `${d.x}, ${d.y}`).join('\n');



    const xLabelInput = document.getElementById('scatter-x-label');

    const yLabelInput = document.getElementById('scatter-y-label');

    const dataInput = document.getElementById('scatter-data-input');



    const updateConfigs = () => {

        runScatterCalculations();

    };



    xLabelInput.addEventListener('input', updateConfigs);

    yLabelInput.addEventListener('input', updateConfigs);

    dataInput.addEventListener('input', updateConfigs);



    calculateBtn.addEventListener('click', () => {

        runScatterCalculations();

    });



    runScatterCalculations();

}



function runScatterCalculations() {

    const xLabel = document.getElementById('scatter-x-label').value.trim();

    const yLabel = document.getElementById('scatter-y-label').value.trim();

    const dataRaw = document.getElementById('scatter-data-input').value;



    const pairs = dataRaw.split('\n')

                          .map(line => line.split(',').map(v => parseFloat(v.trim())))

                          .filter(arr => arr.length === 2 && !isNaN(arr[0]) && !isNaN(arr[1]));



    if (pairs.length < 3) {

        alert("Please input at least 3 X,Y data pairs.");

        return;

    }



    appState.scatter.xLabel = xLabel;

    appState.scatter.yLabel = yLabel;

    appState.scatter.data = pairs.map(p => ({ x: p[0], y: p[1] }));



    const n = pairs.length;

    let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0, sumY2 = 0;



    pairs.forEach(p => {

        const x = p[0];

        const y = p[1];

        sumX += x;

        sumY += y;

        sumXY += x * y;

        sumX2 += x * x;

        sumY2 += y * y;

    });



    const numerator = (n * sumXY) - (sumX * sumY);

    const denominator = Math.sqrt(((n * sumX2) - Math.pow(sumX, 2)) * ((n * sumY2) - Math.pow(sumY, 2)));

    const r = denominator !== 0 ? (numerator / denominator) : 0;



    document.getElementById('scatter-r-val').innerText = r.toFixed(3);

    

    let strength = '';

    const rAbs = Math.abs(r);



    if (rAbs >= 0.8) strength = 'Strong';

    else if (rAbs >= 0.5) strength = 'Moderate';

    else if (rAbs >= 0.3) strength = 'Weak';

    else strength = 'No correlation';



    const direction = r > 0 ? 'Positive' : 'Negative';

    const finalVerdict = rAbs >= 0.3 ? `${strength} ${direction} correlation` : 'No significant correlation';



    document.getElementById('scatter-verdict-text').innerText = finalVerdict;

    document.getElementById('scatter-results').classList.remove('hidden');
    updateScatterQualitativeAdvice(r);



    renderScatterChart(xLabel, yLabel, appState.scatter.data);

}



function renderScatterChart(xLabel, yLabel, data) {

    const ctx = document.getElementById('scatter-chart').getContext('2d');

    if (charts.scatter) charts.scatter.destroy();



    charts.scatter = new Chart(ctx, {

        type: 'scatter',

        data: {

            datasets: [{

                label: 'Measurements',

                data: data,

                backgroundColor: '#1E88E5',

                borderColor: '#1565C0',

                pointRadius: 6

            }]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            scales: {

                x: { title: { display: true, text: xLabel } },

                y: { title: { display: true, text: yLabel } }

            }

        }

    });

}



// Step 6: SPC Control Chart

function initControl() {

    const calculateBtn = document.getElementById('calculate-control-btn');

    document.getElementById('control-data-input').value = appState.control.data.join('\n');



    const varNameInput = document.getElementById('control-var-name');

    const varUnitInput = document.getElementById('control-var-unit');

    const stationSelect = document.getElementById('control-station-select');

    const dataInput = document.getElementById('control-data-input');



    const updateConfigs = () => {

        appState.control.varName = varNameInput.value.trim() || 'Peak Joint Temp';

        appState.control.varUnit = varUnitInput.value.trim() || '°C';

        appState.control.station = stationSelect.value;

        runControlCalculations();

    };



    varNameInput.addEventListener('input', updateConfigs);

    varUnitInput.addEventListener('input', updateConfigs);

    stationSelect.addEventListener('change', updateConfigs);

    dataInput.addEventListener('input', () => {

        runControlCalculations();

    });



    calculateBtn.addEventListener('click', () => {

        runControlCalculations();

    });



    populateControlStations();

    runControlCalculations();

}



function populateControlStations() {

    const select = document.getElementById('control-station-select');

    if (!select) return;

    

    const currentVal = select.value || appState.control.station;

    select.innerHTML = '';

    

    appState.checksheet.periods.forEach(st => {

        const option = document.createElement('option');

        option.value = st;

        option.innerText = st;

        if (st === currentVal) {

            option.selected = true;

        }

        select.appendChild(option);

    });

}



function runControlCalculations() {

    const rawData = document.getElementById('control-data-input').value;

    const values = rawData.split('\n')

                          .map(v => parseFloat(v.trim()))

                          .filter(v => !isNaN(v));



    if (values.length < 5) {

        alert("Please input at least 5 data points for time series control monitoring.");

        return;

    }



    appState.control.data = values;



    const mean = values.reduce((a, b) => a + b, 0) / values.length;

    const sqDiffSum = values.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0);

    const sampleVariance = sqDiffSum / (values.length - 1);

    const stdDev = Math.sqrt(sampleVariance);



    const ucl = mean + 3 * stdDev;

    const lcl = Math.max(0, mean - 3 * stdDev);



    document.getElementById('ctrl-ucl').innerText = ucl.toFixed(2);

    document.getElementById('ctrl-mean').innerText = mean.toFixed(2);

    document.getElementById('ctrl-lcl').innerText = lcl.toFixed(2);



    let stable = true;

    let violationPoints = [];



    values.forEach((v, idx) => {

        if (v > ucl || v < lcl) {

            stable = false;

            violationPoints.push(`Run ${idx + 1} (${v.toFixed(1)})`);

        }

    });



    const verdictBox = document.getElementById('ctrl-verdict-box');

    const verdictText = document.getElementById('ctrl-verdict-text');



    if (stable) {

        verdictBox.style.backgroundColor = 'var(--success-light)';

        verdictBox.style.borderColor = '#C8E6C9';

        verdictBox.style.color = 'var(--success)';

        verdictText.innerHTML = `Process is <strong>STABLE / IN-CONTROL</strong>. Variance remains within natural $\\pm3\\sigma$ bounds.`;

    } else {

        verdictBox.style.backgroundColor = 'var(--danger-light)';

        verdictBox.style.borderColor = '#FFCDD2';

        verdictBox.style.color = 'var(--danger)';

        verdictText.innerHTML = `Process is <strong>OUT OF CONTROL</strong>. Special-cause variations detected at: ${violationPoints.join(', ')}.`;

    }



    document.getElementById('control-results').classList.remove('hidden');
    updateControlQualitativeAdvice(values, mean, ucl, lcl, stdDev);



    renderControlChart(values, mean, ucl, lcl);

}



function renderControlChart(values, mean, ucl, lcl) {

    const ctx = document.getElementById('control-chart').getContext('2d');

    if (charts.control) charts.control.destroy();



    const labels = values.map((_, idx) => `Run ${idx + 1}`);

    const meanLine = new Array(values.length).fill(mean);

    const uclLine = new Array(values.length).fill(ucl);

    const lclLine = new Array(values.length).fill(lcl);



    const labelStr = `${appState.control.varName} (${appState.control.varUnit})`;



    charts.control = new Chart(ctx, {

        type: 'line',

        data: {

            labels: labels,

            datasets: [

                {

                    label: labelStr,

                    data: values,

                    borderColor: '#263238',

                    backgroundColor: 'rgba(38, 50, 56, 0.1)',

                    borderWidth: 2,

                    pointRadius: 5,

                    fill: false,

                    tension: 0.1

                },

                {

                    label: 'Mean',

                    data: meanLine,

                    borderColor: '#0277BD',

                    borderWidth: 1.5,

                    borderDash: [5, 5],

                    pointRadius: 0,

                    fill: false

                },

                {

                    label: 'UCL (+3σ)',

                    data: uclLine,

                    borderColor: '#C62828',

                    borderWidth: 2,

                    borderDash: [2, 2],

                    pointRadius: 0,

                    fill: false

                },

                {

                    label: 'LCL (-3σ)',

                    data: lclLine,

                    borderColor: '#C62828',

                    borderWidth: 2,

                    borderDash: [2, 2],

                    pointRadius: 0,

                    fill: false

                }

            ]

        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            scales: {

                y: { title: { display: true, text: appState.control.varUnit } }

            }

        }

    });

}



// Step 7: Flowchart & Stratification

function initStratification() {

    renderStratificationTable();

    processStratification();

}



function renderStratificationTable() {

    const tbody = document.querySelector('#stratification-table tbody');

    if (!tbody) return;

    tbody.innerHTML = '';



    if (appState.stratification.stations.length === 0) {

        tbody.innerHTML = `<tr><td colspan="3" class="text-center">Compile Step 1 Check Sheet first to populate station allocations.</td></tr>`;

        return;

    }



    const totalDefects = appState.stratification.stations.reduce((a, b) => a + b.count, 0);



    appState.stratification.stations.forEach((st, idx) => {

        const pct = totalDefects > 0 ? ((st.count / totalDefects) * 100) : 0;

        const tr = document.createElement('tr');

        tr.innerHTML = `

            <td><strong>${st.name}</strong></td>

            <td>${st.count}</td>

            <td>${pct.toFixed(1)}%</td>

        `;

        tbody.appendChild(tr);

    });

}



function processStratification() {

    const totalDefects = appState.stratification.stations.reduce((a, b) => a + b.count, 0);

    let maxIdx = -1;

    let maxVal = -1;



    appState.stratification.stations.forEach((st, idx) => {

        if (st.count > maxVal) {

            maxVal = st.count;

            maxIdx = idx;

        }

    });



    buildFlowchartVisual(maxIdx);



    const verdictBox = document.getElementById('strat-verdict-box');

    const verdictText = document.getElementById('strat-verdict-text');

    if (!verdictBox) return;



    if (maxIdx !== -1 && maxVal > 0) {

        const maxStation = appState.stratification.stations[maxIdx];

        const pct = totalDefects > 0 ? ((maxStation.count / totalDefects) * 100) : 0;

        

        verdictBox.classList.remove('hidden');

        verdictText.innerHTML = `

            Birthplace stratification audits trace <strong>${maxStation.name}</strong> as generating 

            <strong>${maxStation.count}</strong> defect units, representing <strong>${pct.toFixed(1)}%</strong> of cumulative system errors.

        `;

    } else {

        verdictBox.classList.add('hidden');

    }

}



function buildFlowchartVisual(maxIdx) {

    const container = document.getElementById('flowchart-container');

    if (!container) return;

    container.innerHTML = '';



    if (appState.stratification.stations.length === 0) {

        container.innerHTML = `<div class="help-text">Compile Step 1 Check Sheet first to view flowchart nodes.</div>`;

        return;

    }



    appState.stratification.stations.forEach((st, idx) => {

        const node = document.createElement('div');

        node.className = 'flow-step-node';

        if (idx === maxIdx && st.count > 0) {

            node.className += ' active-defect-source';

        }



        node.innerHTML = `

            <div class="node-title">${st.name}</div>

            <div class="node-stats">Errors Registered: ${st.count}</div>

        `;

        container.appendChild(node);



        if (idx < appState.stratification.stations.length - 1) {

            const arrow = document.createElement('div');

            arrow.className = 'flow-connector';

            arrow.innerHTML = '<i class="fa-solid fa-circle-arrow-down"></i>';

            container.appendChild(arrow);

        }

    });

}



// Contextual Info Modals Controller

function initInfoModals() {

    const modal = document.getElementById('info-modal');

    const modalTitle = document.getElementById('info-modal-title');

    const modalBody = document.getElementById('info-modal-body');

    const modalClose = document.getElementById('info-modal-close');



    document.addEventListener('click', (e) => {

        const infoBtn = e.target.closest('.info-btn');

        if (infoBtn) {

            const infoId = infoBtn.getAttribute('data-info');

            const data = infoDefinitions[infoId];

            if (data) {

                modalTitle.innerText = data.title;

                modalBody.innerHTML = data.body;

                modal.classList.remove('hidden');



                // Render LaTeX equations to visual form using KaTeX

                if (window.renderMathInElement) {

                    window.renderMathInElement(modalBody, {

                        delimiters: [

                            {left: '$$', right: '$$', display: true},

                            {left: '$', right: '$', display: false},

                            {left: '\\(', right: '\\)', display: false},

                            {left: '\\[', right: '\\]', display: true}

                        ],

                        throwOnError: false

                    });

                }

            }

        }

    });



    const closeModal = () => {

        modal.classList.add('hidden');

    };



    modalClose.addEventListener('click', closeModal);

    modal.addEventListener('click', (e) => {

        if (e.target === modal) {

            closeModal();

        }

    });

}



// Practitioner Manual Downloader

function initManualDownloader() {

    const manualBtn = document.getElementById('manual-download-btn');

    if (!manualBtn) return;

    

    manualBtn.addEventListener('click', () => {

        // Create a temporary hidden container to render the manual content

        const manualContainer = document.createElement('div');

        manualContainer.style.padding = '40px';

        manualContainer.style.fontFamily = "'Inter', sans-serif";

        manualContainer.style.color = '#333';

        manualContainer.style.lineHeight = '1.6';

        manualContainer.className = 'manual-pdf-content';

        

        // Define stylesheet inline to ensure it styles the PDF correctly

        let manualHTML = `

            <style>

                .manual-pdf-content h1 { font-family: 'Outfit', sans-serif; font-size: 26px; color: #1A3A5C; border-bottom: 3px solid #1A3A5C; padding-bottom: 10px; margin-top: 40px; page-break-before: always; }

                .manual-pdf-content h1.title-page { font-size: 36px; text-align: center; border: none; margin-top: 100px; page-break-before: avoid; }

                .manual-pdf-content h2 { font-family: 'Outfit', sans-serif; font-size: 20px; color: #E65100; margin-top: 25px; border-bottom: 1px solid #ECEFF1; padding-bottom: 5px; }

                .manual-pdf-content h3 { font-family: 'Outfit', sans-serif; font-size: 16px; color: #00796B; margin-top: 20px; }

                .manual-pdf-content p { font-size: 13px; margin-bottom: 12px; }

                .manual-pdf-content ul { font-size: 13px; margin-left: 20px; margin-bottom: 15px; }

                .manual-pdf-content li { margin-bottom: 6px; }

                .manual-pdf-content .code-box { background-color: #ECEFF1; padding: 10px; border-radius: 4px; font-family: monospace; font-size: 12px; white-space: pre-wrap; margin-bottom: 15px; }

                .manual-pdf-content .case-box { background-color: #E0F7FA; border-left: 4px solid #00ACC1; padding: 12px; border-radius: 4px; font-size: 12px; margin-bottom: 15px; }

                .manual-pdf-content .formula-box { background-color: #F8F9FA; border-left: 4px solid #1A3A5C; padding: 12px; border-radius: 4px; font-size: 12px; margin-bottom: 15px; }

                .manual-pdf-content .page-break { page-break-before: always; }

            </style>

            

            <div style="text-align: center; padding: 50px 0;">

                <h1 class="title-page">7 QC Tools &amp; Lean Practitioner Manual</h1>

                <p style="font-size: 16px; color: #555; margin-top: 10px;">A Comprehensive Guide to Structured Diagnostic Workbooks and Real-Time Operations</p>

                <div style="margin-top: 100px; border-top: 2px solid #1A3A5C; padding-top: 20px; display: inline-block; width: 60%;">

                    <p><strong>Course:</strong> Business Excellence for Competitive Advantage (BECA)</p>

                    <p><strong>Institution:</strong> Great Lakes Institute of Management</p>

                    <p><strong>Edition:</strong> 2026 Operations Handbook</p>

                </div>

            </div>

            

            <h1 class="page-break">1. Introduction to the 7 QC Tools Pipeline</h1>

            <p>Structured problem-solving in manufacturing and business excellence requires logical sequencing. The 7 Quality Control (QC) tools are traditionally treated as isolated techniques. However, in professional practice, they are <strong>interdependent components of a single diagnostic pipeline</strong>:</p>

            <div class="case-box">

                <strong>End-to-End Database Connectivity:</strong><br>

                Define the operations stations upfront (Step 1) \\(\\rightarrow\\) Log failures dynamically in the Check Sheet (Step 1) \\(\\rightarrow\\) Build the Pareto cumulative ranks (Step 2) \\(\\rightarrow\\) Select the top priority error mode to drill down in the Ishikawa and 5-Why root-cause model (Step 3) \\(\\rightarrow\\) Measure specific station parameter capabilities (\\(C_{pk}\\)) against engineering specs (Step 4) \\(\\rightarrow\\) Analyze correlations between inputs and cycle times (Step 5) \\(\\rightarrow\\) Maintain process control via Shewhart charts (Step 6) \\(\\rightarrow\\) Highlight the exact birthplace of defects in the flowchart (Step 7).

            </div>

            

            <h1>2. The 7 QC Tools: Purpose, Formulas &amp; Industrial Examples</h1>

            

            <h2>Step 1: Check Sheet (Tally &amp; Log)</h2>

            <p><strong>Purpose:</strong> To record defect occurrences at the source in real-time, categorized by failure mode and process station. It establishes the baseline data layer.</p>

            <div class="formula-box">

                <strong>Formula:</strong><br>

                \\(\\text{Station Defect Rate (\\%)} = \\frac{\\text{Defects born at Station } i}{\\text{Total System Defects}} \\times 100\\)

            </div>

            <p><strong>Industrial Example:</strong> Assembly operators log solder fractures, drift errors, and scratch tallies across 4 process stations over a 30-day run. Station 2 logs 55 solder joint fractures out of 65 total joint cracks.</p>

            

            <h2>Step 2: Pareto Chart (Prioritize the Vital Few)</h2>

            <p><strong>Purpose:</strong> Separates the "vital few" defects from the "trivial many" using the 80/20 rule, directing engineering focus to the top 80% cumulative defect categories.</p>

            <div class="formula-box">

                <strong>Formula:</strong><br>

                \\(\\text{Cumulative Percentage}_k = \\frac{\\sum_{i=1}^k \\text{Count}_i}{\\text{Total Defects}} \\times 100\\) (ordered by descending count).

            </div>

            <p><strong>Industrial Example:</strong> Out of 159 compiled defects, Solder Joint Fracture (65) and Calibration Drift (36) account for 63.5% of total errors. Adding Enclosure Scratches (28) pushes the cumulative percentage to 81.1%, defining these three as the target priorities.</p>



            <h2>Step 3: Fishbone &amp; 5-Why (Root-Cause Diagnosis)</h2>

            <p><strong>Purpose:</strong> Ishikawa maps brainstorming across the 6M categories (Man, Machine, Method, Material, Measurement, Mother Nature) to prevent bias, while the 5-Why drills down to systemic organizational root causes.</p>

            <p><strong>Industrial Example:</strong> Focusing on Solder Joint Fractures, the team identifies reflow oven fluctuations (Machine) and traces it: Reflow zone temperature shifts \\(\\rightarrow\\) thermocouple out of calibration \\(\\rightarrow\\) preventative maintenance schedule missed \\(\\rightarrow\\) maintenance staff overloaded \\(\\rightarrow\\) corporate training budget cuts (Root Cause).</p>

            

            <h2>Step 4: Histogram &amp; Capability (\\(C_p\\) &amp; \\(C_{pk}\\))</h2>

            <p><strong>Purpose:</strong> Assesses process distribution center and spread relative to engineering specification limits (USL/LSL). A capable process requires \\(C_{pk} \\ge 1.33\\).</p>

            <div class="formula-box">

                <strong>Formulas:</strong><br>

                \\(C_p = \\frac{\\text{USL} - \\text{LSL}}{6\\sigma}\\) &nbsp;&nbsp;&nbsp;&nbsp; \\(C_{pk} = \\min\\left(\\frac{\\text{USL} - \\mu}{3\\sigma}, \\frac{\\mu - \\text{LSL}}{3\\sigma}\\right)\\)<br>

                <span style="margin-top: 5px; display: block;">where \\(\\mu = \\text{Mean}\\), \\(\\sigma = \\text{Sample Standard Deviation } \\sqrt{\\frac{\\sum (x_i - \\mu)^2}{n - 1}}\)</span>

            </div>

            <p><strong>Industrial Example:</strong> Peak oven temperature USL is 245°C, LSL is 235°C. The process Mean is 238.4°C and Standard Deviation is 1.48°C. The calculated \\(C_p = 1.13\\) and \\(C_{pk} = 0.77\\). Since \\(C_{pk} &lt; 1.33\\), the process is deemed not capable.</p>



            <h2>Step 5: Scatter Diagram (Correlation)</h2>

            <p><strong>Purpose:</strong> Tests the statistical relationship (correlation) between an independent process variable (X) and a dependent quality result (Y).</p>

            <div class="formula-box">

                <strong>Formula (Pearson Correlation Coefficient \\(r\\)):</strong><br>

                \\(r = \\frac{n\\sum xy - \\sum x\\sum y}{\\sqrt{[n\\sum x^2 - (\\sum x)^2][n\\sum y^2 - (\\sum y)^2]}}\\) (values between -1 and +1).

            </div>

            <p><strong>Industrial Example:</strong> Plotting conveyor speed (m/min) against reflow joint peak temperature. The coefficient \\(r = -0.98\\) indicates a strong negative correlation, confirming speed is a critical control variable.</p>



            <h2>Step 6: Shewhart SPC Control Chart</h2>

            <p><strong>Purpose:</strong> Monitors process variation over time. Compares actual readings against statistical control limits (\\(\\pm 3\\sigma\\) from Mean) to detect special-cause variations.</p>

            <div class="formula-box">

                <strong>Formulas:</strong><br>

                \\(\\text{UCL} = \\bar{X} + 3\\sigma\\) &nbsp;&nbsp;&nbsp;&nbsp; \\(\\text{LCL} = \\bar{X} - 3\\sigma\\) (using run standard deviation).

            </div>

            <p><strong>Industrial Example:</strong> Tracking oven peak temperature across consecutive runs. Run 9 and Run 19 exceed the UCL limit, showing out-of-control conditions requiring investigation.</p>



            <h2>Step 7: Flowchart &amp; Stratification</h2>

            <p><strong>Purpose:</strong> Sub-divides aggregated defect logs by station birthplaces and renders the process mapping to target engineering redesigns.</p>

            <p><strong>Industrial Example:</strong> Compiling Check Sheet columns maps defects born at each stage. Station 2 generates 71 defects (44.7%), and is highlighted in the flowchart as the birthplace source.</p>

            

            <h1 class="page-break">3. Detailed Analysis of the 18 Primary Lean Symptoms</h1>

            <p>Below is the mathematical and operational dictionary detailing all 18 symptoms modeled in the diagnostic engine, including their formulas, variables, and case study applications.</p>

        `;



        // Loop through all 18 info definitions dynamically to populate the manual!

        const symptomsList = [

            'defects', 'output', 'leadtime', 'changeover', 'wip', 'motion', 'skills', 'oee', 'scrap', 'design',

            'infosilose', 'visuals', 'scheduling', 'planning', 'absenteeism', 'workdist', 'skillgap', 'downtime'

        ];



        symptomsList.forEach((key, idx) => {

            const diag = symptomDiagnoses[key];

            if (diag) {

                // Let's extract variables and formulas from our detailed dictionary

                let detailedFormula = "";

                let detailedVars = "";

                let leanTools = "";



                if (key === 'defects') {

                    detailedFormula = "\\text{First Pass Yield (FPY)} = \\prod Y_i = Y_1 \\times Y_2 \\times \\dots \\times Y_n";

                    detailedVars = "\\(Y_i\\) (Yield of station \\(i\\)), \\(D\\) (Total defects), \\(P\\) (Production volume).";

                    leanTools = "Check Sheet \\(\\rightarrow\\) Pareto Chart \\(\\rightarrow\\) Fishbone &amp; 5-Why \\(\\rightarrow\\) Poka-Yoke.";

                } else if (key === 'output') {

                    detailedFormula = "T = \\frac{\\text{Net Available Work Time}}{\\text{Customer Demand Rate}}, \\text{Line Efficiency} = \\frac{\\sum C_{t,i}}{N \\times \\max(C_{t,i})} \\times 100";

                    detailedVars = "\\(T\\) (Takt Time), \\(C_{t,i}\\) (Cycle Time of station \\(i\\)), \\(N\\) (Operator count).";

                    leanTools = "Cycle Time profiling \\(\\rightarrow\\) Takt analysis \\(\\rightarrow\\) Yamazumi balance redistributions.";

                } else if (key === 'leadtime') {

                    detailedFormula = "\\text{Process Lead Time (LT)} = \\frac{\\text{Work-In-Progress (WIP)}}{\\text{Throughput Rate}}, \\text{PCE} = \\frac{\\text{Value-Add Time (VAT)}}{\\text{Total Lead Time (LT)}} \\times 100";

                    detailedVars = "\\(WIP\\) (Unfinished parts), \\(VAT\\) (Value-added processing time), \\(LT\\) (Lead time).";

                    leanTools = "Value Stream Mapping (VSM) \\(\\rightarrow\\) physical cell layouts \\(\\rightarrow\\) Kanban pull system.";

                } else if (key === 'changeover') {

                    detailedFormula = "\\text{Setup Loss Rate} = \\frac{\\text{Changeover Hours}}{\\text{Total Available Hours}} \\times 100";

                    detailedVars = "Internal setup time (machine stopped) vs. External setup time (done while running).";

                    leanTools = "SMED (Single-Minute Exchange of Die) task separation \\(\\rightarrow\\) quick-release fittings.";

                } else if (key === 'wip') {

                    detailedFormula = "K = \\frac{\\text{Daily Demand} \\times \\text{Lead Time} \\times (1 + \\alpha)}{\\text{Container Capacity}}";

                    detailedVars = "\\(\\alpha\\) (Safety factor, 0.1 to 0.2), Lead Time (replenishment cycle hours).";

                    leanTools = "Kanban loop sizing \\(\\rightarrow\\) visual inventory limits (5S) \\(\\rightarrow\\) pull-based dispatch.";

                } else if (key === 'motion') {

                    detailedFormula = "D = \\sum (F_i \\times d_i)";

                    detailedVars = "\\(F_i\\) (Walk frequency per shift), \\(d_i\\) (Walk distance in meters).";

                    leanTools = "Spaghetti Diagram mapping \\(\\rightarrow\\) U-shaped cell design \\(\\rightarrow\\) point-of-use shadow boards.";

                } else if (key === 'skills') {

                    detailedFormula = "\\text{Cross-Training Index} = \\frac{\\sum \\text{Operator Skill Competency Levels}}{\\text{Total Required Station Competencies}}";

                    detailedVars = "Skill Levels (1: Trainee, 2: Run solo, 3: Certified trainer).";

                    leanTools = "Cross-training Skill Matrix \\(\\rightarrow\\) Standard Work SOP checklists.";

                } else if (key === 'oee') {

                    detailedFormula = "\\text{OEE} = \\text{Availability} \\times \\text{Performance} \\times \\text{Quality}";

                    detailedVars = "\\text{Availability} = \\frac{\\text{Run Time}}{\\text{Planned Time}}, \\text{Performance} = \\frac{\\text{Ideal Cycle Time} \\times \\text{Parts}}{\\text{Run Time}}, \\text{Quality} = \\frac{\\text{Good Parts}}{\\text{Total Parts}}.";

                    leanTools = "OEE log sheets \\(\\rightarrow\\) Six Big Losses auditing \\(\\rightarrow\\) TPM Autonomous Maintenance.";

                } else if (key === 'scrap') {

                    detailedFormula = "\\text{Scrap Rate} = \\frac{\\text{Scrap Weight}}{\\text{Input Weight}} \\times 100";

                    detailedVars = "Scrap weight, total input material weight, unit material costs.";

                    leanTools = "Scrap tracking by process zone \\(\\rightarrow\\) Parameter SPC charts \\(\\rightarrow\\) process centering.";

                } else if (key === 'design') {

                    detailedFormula = "C_p = \\frac{\\text{USL} - \\text{LSL}}{6\\sigma}, C_{pk} = \\min\\left(\\frac{\\text{USL} - \\mu}{3\\sigma}, \\frac{\\mu - \\text{LSL}}{3\\sigma}\\right)";

                    detailedVars = "\\(\\text{USL}/\\text{LSL}\\) (Spec limits), \\(\\mu\\) (Process Mean), \\(\\sigma\\) (Standard Deviation).";

                    leanTools = "House of Quality (HOQ) design checks \\(\\rightarrow\\) capability studies \\(\\rightarrow\\) tolerance widening.";

                } else if (key === 'infosilose') {

                    detailedFormula = "\\text{Info Lead Time} = \\sum (\\text{Processing Time} + \\text{Inbox queue time})";

                    detailedVars = "Communication step processing hours vs. waiting queue delays.";

                    leanTools = "Communication VSM \\(\\rightarrow\\) daily Obeya (War Room) visual standups.";

                } else if (key === 'visuals') {

                    detailedFormula = "\\text{5S Score} = \\frac{\\text{Standards Met}}{\\text{Total Standards Audited}} \\times 100, \\text{Search Time } \\le 30\\text{s}";

                    detailedVars = "5S Standards (Sort, Straighten, Shine, Standardize, Sustain).";

                    leanTools = "5S baseline audits \\(\\rightarrow\\) shadow boards \\(\\rightarrow\\) Andon alarms \\(\\rightarrow\\) floor limits.";

                } else if (key === 'scheduling') {

                    detailedFormula = "\\text{Inventory Turns} = \\frac{\\text{Cost of Goods Sold}}{\\text{Average Inventory Value}}";

                    detailedVars = "COGS, Average on-hand warehouse value.";

                    leanTools = "Inventory Turns audits \\(\\rightarrow\\) Heijunka (Production Leveling) \\(\\rightarrow\\) Kanban pull scheduling.";

                } else if (key === 'planning') {

                    detailedFormula = "\\text{Capacity Load Ratio} = \\frac{\\text{Required Work Hours}}{\\text{Available Capacity Hours}}";

                    detailedVars = "Required workload hours, available machine/shift hours, target run efficiency.";

                    leanTools = "Capacity profiling \\(\\rightarrow\\) S&OP checklist alignments.";

                } else if (key === 'absenteeism') {

                    detailedFormula = "\\text{Absenteeism Rate} = \\frac{\\text{Absent Hours}}{\\text{Scheduled Hours}} \\times 100";

                    detailedVars = "Absent hours, scheduled work hours.";

                    leanTools = "Skill Matrix scheduling \\(\\rightarrow\\) visual SOP checklists \\(\\rightarrow\\) operator floaters.";

                } else if (key === 'workdist') {

                    detailedFormula = "\\text{Line Balance Loss} = 100\\% - \\text{Line Efficiency}";

                    detailedVars = "Cycle times of operators, bottleneck station cycle times.";

                    leanTools = "Time studies \\(\\rightarrow\\) Yamazumi balance charts \\(\\rightarrow\\) work redistribution.";

                } else if (key === 'skillgap') {

                    detailedFormula = "\\text{Training Efficiency Index} = \\frac{\\text{Post-training Defect Rate}}{\\text{Baseline Defect Rate}}";

                    detailedVars = "Operator defect count per shift, training hours.";

                    leanTools = "TWI Job Instruction checklists \\(\\rightarrow\\) visual SOPs \\(\\rightarrow\\) mistake-proofing checks.";

                } else if (key === 'downtime') {

                    detailedFormula = "\\text{MTBF} = \\frac{\\text{Total Run Time}}{\\text{Breakdowns}}, \\text{MTTR} = \\frac{\\text{Total Repair Time}}{\\text{Breakdowns}}";

                    detailedVars = "Total operational uptime hours, repair downtime hours, breakdown frequency.";

                    leanTools = "MTBF/MTTR tracking \\(\\rightarrow\\) TPM Autonomous Maintenance \\(\\rightarrow\\) predictive SPC tracking.";

                }



                manualHTML += `

                    <div style="margin-bottom: 25px; border-bottom: 1px solid #ECEFF1; padding-bottom: 20px; page-break-inside: avoid;">

                        <h3 style="color: #E65100; margin-top: 0;">Symptom: ${idx + 1}. ${key.charAt(0).toUpperCase() + key.slice(1)}</h3>

                        <p><strong>Operational Impact:</strong> ${diag.step1.split(':')[0] || 'Process constraints'}</p>

                        <div class="case-box">

                            <strong>Detailed Example / Case Study:</strong><br>

                            ${diag.case}

                        </div>

                        <div class="formula-box">

                            <strong>Diagnostic Formula &amp; Variables:</strong><br>

                            \\(${detailedFormula}\\)<br>

                            <span style="font-size: 11px; color: #555; display: block; margin-top: 6px;"><strong>Variables:</strong> ${detailedVars}</span>

                        </div>

                        <p><strong>Step-by-Step Diagnostic Workflow:</strong></p>

                        <ol style="font-size: 13px; margin-left: 20px;">

                            <li><strong>Diagnostic Phase:</strong> ${diag.step1}</li>

                            <li><strong>Lean Intervention:</strong> ${diag.step2}</li>

                            <li><strong>Advanced Optimization:</strong> ${diag.step3}</li>

                        </ol>

                        <p style="font-size: 12px; color: #00796B; margin-top: 5px;"><strong>Target Entry Point:</strong> Step ${diag.targetStep} of the 7 QC Tools Sequential Diagnostic Suite.</p>

                    </div>

                `;

            }

        });

        

        // Open the manual in a new browser tab for print-to-PDF

        const fullPageHTML = `<!DOCTYPE html>

<html lang="en">

<head>

    <meta charset="UTF-8">

    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>7 QC Tools &amp; Lean Practitioner Manual</title>

    <link rel="preconnect" href="https://fonts.googleapis.com">

    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Outfit:wght@600;700;800&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.css">

    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/katex.min.js"></script>

    <script defer src="https://cdn.jsdelivr.net/npm/katex@0.16.8/dist/contrib/auto-render.min.js"></script>

    <style>

        body { font-family: 'Inter', Georgia, serif; max-width: 860px; margin: 0 auto; padding: 30px 40px 80px; color: #222; line-height: 1.75; background: #fff; }

        h1 { font-family: 'Outfit', sans-serif; font-size: 22px; color: #1A3A5C; border-bottom: 3px solid #1A3A5C; padding-bottom: 8px; margin-top: 50px; }

        h1.title-page { font-size: 32px; text-align: center; border: none; margin-top: 100px; padding-bottom: 0; }

        h2 { font-family: 'Outfit', sans-serif; font-size: 17px; color: #E65100; margin-top: 22px; border-bottom: 1px solid #ECEFF1; padding-bottom: 4px; }

        h3 { font-family: 'Outfit', sans-serif; font-size: 14px; color: #00796B; margin-top: 15px; }

        p { font-size: 13px; margin-bottom: 10px; }

        ul, ol { font-size: 13px; margin-left: 20px; margin-bottom: 12px; }

        li { margin-bottom: 5px; }

        .case-box { background: #E0F7FA; border-left: 4px solid #00ACC1; padding: 12px 15px; border-radius: 4px; font-size: 12.5px; margin: 12px 0; }

        .formula-box { background: #F8F9FA; border-left: 4px solid #1A3A5C; padding: 12px 15px; border-radius: 4px; font-size: 12.5px; margin: 12px 0; }

        .manual-pdf-content h1 { font-family: 'Outfit', sans-serif; font-size: 22px; color: #1A3A5C; border-bottom: 3px solid #1A3A5C; padding-bottom: 8px; margin-top: 50px; }

        .manual-pdf-content h1.title-page { font-size: 32px; text-align: center; border: none; margin-top: 100px; }

        .manual-pdf-content h2 { font-family: 'Outfit', sans-serif; font-size: 17px; color: #E65100; margin-top: 22px; }

        .manual-pdf-content h3 { color: #00796B; font-size: 14px; }

        .manual-pdf-content p, .manual-pdf-content ul, .manual-pdf-content ol { font-size: 13px; }

        .manual-pdf-content .case-box { background: #E0F7FA; border-left: 4px solid #00ACC1; padding: 12px; border-radius: 4px; font-size: 12.5px; margin: 12px 0; }

        .manual-pdf-content .formula-box { background: #F8F9FA; border-left: 4px solid #1A3A5C; padding: 12px; border-radius: 4px; font-size: 12.5px; margin: 12px 0; }

        .print-btn { position: fixed; bottom: 24px; right: 24px; background: #1A3A5C; color: white; border: none; padding: 12px 26px; border-radius: 8px; cursor: pointer; font-size: 14px; font-weight: 600; box-shadow: 0 4px 20px rgba(26,58,92,0.4); z-index: 1000; font-family: 'Inter', sans-serif; transition: background 0.2s; }

        .print-btn:hover { background: #2a5a8c; }

        @media print { .print-btn { display: none; } }

        .katex-display { overflow-x: auto; overflow-y: hidden; }

    </style>

</head>

<body>

${manualHTML}

    <button class="print-btn" onclick="window.print()">🖨 Print / Save as PDF</button>

    <script>

        document.addEventListener('DOMContentLoaded', function() {

            if (window.renderMathInElement) {

                renderMathInElement(document.body, {

                    delimiters: [

                        {left: '$$', right: '$$', display: true},

                        {left: '$', right: '$', display: false},

                        {left: '\\\\(', right: '\\\\)', display: false},

                        {left: '\\\\[', right: '\\\\]', display: true}

                    ],

                    throwOnError: false

                });

            }

        });

    </script>

</body>

</html>`;



        // Create a temporary hidden container to render the manual content for pdf generation
        const tempDiv = document.createElement('div');
        tempDiv.style.padding = '40px';
        tempDiv.style.fontFamily = "'Inter', sans-serif";
        tempDiv.style.color = '#333';
        tempDiv.style.lineHeight = '1.6';
        tempDiv.innerHTML = manualHTML;
        document.body.appendChild(tempDiv);

        // Render equations using KaTeX if available
        if (window.renderMathInElement) {
            window.renderMathInElement(tempDiv, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false},
                    {left: '\\[', right: '\\]', display: true}
                ],
                throwOnError: false
            });
        }

        const opt = {
            margin:       12,
            filename:     '7_QC_Tools_Lean_Practitioner_Manual.pdf',
            image:        { type: 'jpeg', quality: 0.98 },
            html2canvas:  { scale: 2, useCORS: true },
            jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
            pagebreak:    { mode: ['avoid-all', 'css'] }
        };

        // Temporarily change button state to show loading
        const originalText = manualBtn.innerHTML;
        manualBtn.disabled = true;
        manualBtn.innerHTML = '<i class="fa-solid fa-spinner fa-spin"></i> Generating PDF...';

        html2pdf().from(tempDiv).set(opt).save().then(() => {
            document.body.removeChild(tempDiv);
            manualBtn.disabled = false;
            manualBtn.innerHTML = originalText;
        }).catch(err => {
            console.error('PDF generation failed, falling back to window.open approach:', err);
            document.body.removeChild(tempDiv);
            manualBtn.disabled = false;
            manualBtn.innerHTML = originalText;
            
            // Fallback to Blob URL open in new tab
            const blob = new Blob([fullPageHTML], { type: 'text/html;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            const fallbackWin = window.open(url, '_blank');
            if (!fallbackWin) {
                alert('Pop-up blocked! Please allow pop-ups for this site, or download the results PDF.');
            }
        });
    });
}



// Case Study Template Loader — Apex Electro-Tech


// Case Study Template Loader — Apex Electro-Tech
function initTemplateLoader() {
    const loadBtn = document.getElementById('load-template-btn');
    const welcomeLoadBtn = document.getElementById('welcome-load-default-btn');
    const clearCustomBtn = document.getElementById('welcome-clear-custom-btn');

    const loadTemplate = () => {
        // Load COPQ inputs
        document.getElementById('copq-revenue').value = 100;
        document.getElementById('copq-prevention').value = 0.8;
        document.getElementById('copq-appraisal').value = 2.5;
        document.getElementById('copq-internal').value = 6.8;
        document.getElementById('copq-external').value = 4.2;
        calculateCOPQ();

        // Load Check Sheet Stations Configuration
        appState.checksheet.periods = ['Station 1: Reflow Paste', 'Station 2: Solder Assembly', 'Station 3: Avionics Testing', 'Station 4: Final Inspection'];
        document.getElementById('checksheet-periods').value = 'Station 1: Reflow Paste, Station 2: Solder Assembly, Station 3: Avionics Testing, Station 4: Final Inspection';

        appState.checksheet.categories = [
            'Solder Joint Fracture',
            'Calibration Drift',
            'Enclosure Scratch',
            'Firmware Boot Failure',
            'Packaging Tear'
        ];

        // Linked counts: categories vs stations
        appState.checksheet.data = {
            'Solder Joint Fracture': [5, 55, 3, 2],      // Total = 65
            'Calibration Drift': [1, 2, 30, 3],        // Total = 36
            'Enclosure Scratch': [3, 12, 4, 9],        // Total = 28
            'Firmware Boot Failure': [0, 2, 16, 2],    // Total = 20
            'Packaging Tear': [0, 0, 1, 9]             // Total = 10
        };

        // Reset Fishbone Effect
        appState.fishbone.effect = 'Solder Joint Fracture';

        // Load Apex Causes
        appState.fishbone.causes = [
            { id: 'ap1', category: 'man', text: 'Operator hand-soldering secondary wires lacks certification', why1: 'Cost-reduction cuts technician training budget', why2: 'Margin expansion directives', why3: '', why4: '', why5: '', root: 'Cost-reduction cuts technician training budget' },
            { id: 'ap2', category: 'machine', text: 'Reflow oven zone 3 temperature fluctuation', why1: 'Thermocouple calibration schedule not standardized', why2: 'Preventative maintenance SOP skipped during peak shifts', why3: '', why4: '', why5: '', root: 'Thermocouple calibration schedule not standardized' },
            { id: 'ap3', category: 'method', text: 'No reflow solder cooling curve checks in SOP', why1: 'Process parameters design released without DFM verification', why2: 'Legacy design process flow', why3: '', why4: '', why5: '', root: 'Process parameters design released without DFM verification' },
            { id: 'ap4', category: 'material', text: 'Low flux concentration solder paste', why1: 'Supplier selected solely on unit material pricing bidding', why2: 'Procurement metric focuses on cost reduction', why3: '', why4: '', why5: '', root: 'Procurement metric focuses on cost reduction' }
        ];

        // Capability parameters
        appState.capability.varName = 'Reflow Peak Temperature';
        appState.capability.varUnit = '°C';
        appState.capability.station = 'Station 2: Solder Assembly';
        appState.capability.lsl = 235;
        appState.capability.usl = 245;
        appState.capability.data = [236.0, 237.5, 239.0, 236.2, 241.0, 238.0, 239.5, 237.0, 240.2, 238.5, 236.8, 242.0, 240.8, 237.9, 239.4, 238.0, 239.0, 239.9, 241.5, 237.5];

        document.getElementById('capability-var-name').value = appState.capability.varName;
        document.getElementById('capability-var-unit').value = appState.capability.varUnit;
        document.getElementById('lsl-input').value = appState.capability.lsl;
        document.getElementById('usl-input').value = appState.capability.usl;
        document.getElementById('capability-data-input').value = appState.capability.data.join(', ');

        // Scatter parameters
        appState.scatter.xLabel = 'Conveyor Speed (m/min)';
        appState.scatter.yLabel = 'Peak Joint Temp (°C)';
        appState.scatter.data = [
            { x: 1.0, y: 244.2 }, { x: 1.2, y: 242.1 }, { x: 1.4, y: 239.5 }, { x: 1.6, y: 237.2 }, { x: 1.8, y: 234.8 },
            { x: 2.0, y: 232.0 }, { x: 2.2, y: 229.4 }, { x: 2.4, y: 226.5 }, { x: 2.6, y: 223.8 }, { x: 2.8, y: 221.0 }
        ];

        document.getElementById('scatter-x-label').value = appState.scatter.xLabel;
        document.getElementById('scatter-y-label').value = appState.scatter.yLabel;
        document.getElementById('scatter-data-input').value = appState.scatter.data.map(d => `${d.x}, ${d.y}`).join('\n');

        // Control parameters
        appState.control.varName = 'Peak Joint Temp';
        appState.control.varUnit = '°C';
        appState.control.station = 'Station 2: Solder Assembly';
        appState.control.data = [238.2, 239.1, 237.8, 238.5, 239.4, 238.0, 239.6, 240.1, 243.5, 238.3, 237.5, 238.9, 238.1, 239.2, 238.9, 239.5, 238.8, 239.3, 244.2, 238.0];

        document.getElementById('control-var-name').value = appState.control.varName;
        document.getElementById('control-var-unit').value = appState.control.varUnit;
        document.getElementById('control-data-input').value = appState.control.data.join('\n');

        // Refresh widgets via dynamic pipeline
        renderChecksheetTables();
        populateCapabilityStations();
        populateControlStations();
        document.getElementById('capability-station-select').value = appState.capability.station;
        document.getElementById('control-station-select').value = appState.control.station;
        
        compileChecksheetData(); // Automatically runs Pareto, fishbone, and Step 7 stratification flowchart!
        
        initFishbone();
        runCapabilityCalculations();
        runScatterCalculations();
        runControlCalculations();

        // Highlight defects symptom
        document.getElementById('symptom-select').value = 'defects';
        document.getElementById('symptom-select').dispatchEvent(new Event('change'));
        // Render welcome screen Math
        if (window.renderMathInElement) {
            window.renderMathInElement(document.getElementById('diagnosis-result'), {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false},
                    {left: '\\[', right: '\\]', display: true}
                ],
                throwOnError: false
            });
        }

        // Expand Case Study panel automatically
        document.getElementById('guide-body-content').classList.remove('collapsed');
        document.getElementById('guide-chevron').className = 'fa-solid fa-chevron-up';

        alert("Connected Default Case Study loaded! Solder Joint Fracture totals 65 defects (Pareto #1) and Station 2 has 71 total defects (Stratification Flowchart Birthplace) automatically linked.");
    };

    const clearWorkspace = () => {
        // Clear COPQ inputs
        document.getElementById('copq-revenue').value = '';
        document.getElementById('copq-prevention').value = '0';
        document.getElementById('copq-appraisal').value = '0';
        document.getElementById('copq-internal').value = '0';
        document.getElementById('copq-external').value = '0';
        if (document.getElementById('copq-results-card')) {
            document.getElementById('copq-results-card').classList.add('hidden');
        }

        // Reset checksheet state
        appState.checksheet.periods = ['Station 1', 'Station 2', 'Station 3', 'Station 4'];
        appState.checksheet.categories = ['Defect Type A', 'Defect Type B', 'Defect Type C'];
        appState.checksheet.data = {
            'Defect Type A': [0, 0, 0, 0],
            'Defect Type B': [0, 0, 0, 0],
            'Defect Type C': [0, 0, 0, 0]
        };
        document.getElementById('checksheet-periods').value = 'Station 1, Station 2, Station 3, Station 4';

        // Clear Fishbone causes
        appState.fishbone.effect = '';
        appState.fishbone.causes = [];

        // Clear Capability parameters
        appState.capability.varName = '';
        appState.capability.varUnit = '';
        appState.capability.station = '';
        appState.capability.lsl = 0;
        appState.capability.usl = 0;
        appState.capability.data = [];

        document.getElementById('capability-var-name').value = '';
        document.getElementById('capability-var-unit').value = '';
        document.getElementById('lsl-input').value = '';
        document.getElementById('usl-input').value = '';
        document.getElementById('capability-data-input').value = '';

        // Clear Scatter parameters
        appState.scatter.xLabel = '';
        appState.scatter.yLabel = '';
        appState.scatter.data = [];

        document.getElementById('scatter-x-label').value = '';
        document.getElementById('scatter-y-label').value = '';
        document.getElementById('scatter-data-input').value = '';

        // Clear Control parameters
        appState.control.varName = '';
        appState.control.varUnit = '';
        appState.control.station = '';
        appState.control.data = [];

        document.getElementById('control-var-name').value = '';
        document.getElementById('control-var-unit').value = '';
        document.getElementById('control-data-input').value = '';

        // Hide results boxes
        document.getElementById('capability-results')?.classList.add('hidden');
        document.getElementById('scatter-results')?.classList.add('hidden');
        document.getElementById('control-results')?.classList.add('hidden');

        // Reset Symptom Selector
        document.getElementById('symptom-select').value = '';
        document.getElementById('diagnosis-result').classList.add('hidden');

        // Collapse Case Study guide
        document.getElementById('guide-body-content').classList.add('collapsed');
        document.getElementById('guide-chevron').className = 'fa-solid fa-chevron-down';

        // Refresh UI
        renderChecksheetTables();
        populateCapabilityStations();
        populateControlStations();
        compileChecksheetData();
        initFishbone();

        alert("All workspace parameters have been cleared! You can now start entering your own data step-by-step.");
    };

    const headerClearBtn = document.getElementById('clear-workspace-btn');

    if (loadBtn) loadBtn.addEventListener('click', loadTemplate);
    if (welcomeLoadBtn) welcomeLoadBtn.addEventListener('click', loadTemplate);
    if (clearCustomBtn) clearCustomBtn.addEventListener('click', clearWorkspace);
    if (headerClearBtn) headerClearBtn.addEventListener('click', clearWorkspace);
}




// PDF Exporter

function initPDFExporter() {

    const exportBtn = document.getElementById('pdf-export-btn');

    if (exportBtn) {

        exportBtn.addEventListener('click', () => {

            const opt = {

                margin:       10,

                filename:     'Connected_7QC_COPQ_Diagnostic_Report.pdf',

                image:        { type: 'jpeg', quality: 0.98 },

                html2canvas:  { scale: 2, useCORS: true },

                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },

                pagebreak:    { mode: ['avoid-all', 'css'] }

            };



            const sections = document.querySelectorAll('.display-section');

            sections.forEach(sec => sec.classList.add('active'));



            const element = document.getElementById('print-content');

            

            html2pdf().from(element).set(opt).save().then(() => {

                const activeLink = document.querySelector('.pipeline-nav a.active');

                if (activeLink) {

                    const activeStep = activeLink.getAttribute('data-step');

                    navigateToStep(activeStep);

                }

            });

        });

    }

}



// Practitioner Knowledge Base - Structured suggestions for each tool

const practitionerKnowledge = {

    pareto: `

        <h5><i class="fa-solid fa-graduation-cap"></i> Practitioner Insight: Count vs. Severity (80/20 Rule)</h5>

        <p><strong>Deming's Focus Rule:</strong> Do not try to solve all listed defects simultaneously. Dedicating engineering resources exclusively to the #1 Pareto item (e.g. <em>Solder Joint Fracture</em> in Apex case) yields the highest immediate quality recovery.</p>

        <p><strong>Warning:</strong> Count is not always equal to cost. A low-frequency defect might cost 100x more than a high-frequency minor cosmetic scratch. Adjust your priorities if certain failure modes carry heavy COPQ penalties.</p>

    `,

    fivewhy: `

        <h5><i class="fa-solid fa-graduation-cap"></i> Practitioner Insight: Verifying the Root Cause Chain</h5>

        <p><strong>The "Therefore" Test:</strong> Always verify your 5-Why chain backwards. Read it in reverse using "therefore" (e.g. *Lack of budget, therefore staff is overloaded, therefore PM was skipped, therefore thermocouples shifted, therefore joints fractured*). If the logic holds, the chain is valid.</p>

        <p><strong>The Blame Trap:</strong> If your root cause points to "operator carelessness" or "human error", it is invalid. Root causes must always point to process design failures, training system gaps, or lack of standardized work controls.</p>

    `,

    capability: `

        <h5><i class="fa-solid fa-graduation-cap"></i> Practitioner Insight: Centering vs. Variation Control</h5>

        <p><strong>If \\(C_p > 1.33\\) but \\(C_{pk} < 1.33\\):</strong> The process width is narrow enough, but the mean is shifted off-center. Solution: center the machine settings (mean adjustment), do not touch the variation parameters.</p>

        <p><strong>If both \\(C_p < 1.33\\) and \\(C_{pk} < 1.33\\):</strong> The natural variation spread is too wide. Centering will not solve the issue. You must reduce machine tolerances, rebuild tooling, or re-engineer material inputs to contract the variance.</p>

        <p><strong>Assumption:</strong> Capability math assumes a normal bell-curve distribution. Skewed or multi-modal datasets yield highly misleading capability indexes.</p>

    `,

    scatter: `

        <h5><i class="fa-solid fa-graduation-cap"></i> Practitioner Insight: Correlation vs. Causation</h5>

        <p><strong>Ishikawa's Warning:</strong> A high Pearson correlation coefficient (\(r \\approx \\pm0.9\)) shows mathematical covariance, not physical causation. Always run physical confirmation runs on the shop floor to verify the dependency before implementing layout changes.</p>

        <p><strong>Outliers:</strong> Beware of extreme outliers in your data. A single bad reading can artificially inflate or deflate the Pearson coefficient.</p>

    `,

    control: `

        <h5><i class="fa-solid fa-graduation-cap"></i> Practitioner Insight: Control Limits vs. Specification Limits</h5>

        <p><strong>Crucial Rule:</strong> Control limits (UCL/LCL) represent what the process <em>is capable of doing</em> based on standard deviations (\\(\\pm3\\sigma\\)). Specification limits (USL/LSL) represent what the customer <em>wants</em>. Never plot specification limits on an SPC Control Chart; doing so encourages operators to over-adjust.</p>

        <p><strong>Deming's Tampering Rule:</strong> Adjusting a stable process because of a single point near the limit increases total process variation. Only intervene when a point violates control boundaries (points outside UCL/LCL or 7 consecutive points on one side of the mean).</p>

    `

};



function renderPractitionerKnowledge() {

    const ids = ['pareto', 'fivewhy', 'capability', 'scatter', 'control'];

    ids.forEach(id => {

        const el = document.getElementById(`${id}-knowledge`);

        if (el) {

            el.innerHTML = practitionerKnowledge[id];

            

            // Render Math equations inside the advice boxes using KaTeX

            if (window.renderMathInElement) {

                window.renderMathInElement(el, {

                    delimiters: [

                        {left: '$$', right: '$$', display: true},

                        {left: '$', right: '$', display: false},

                        {left: '\\(', right: '\\)', display: false},

                        {left: '\\[', right: '\\]', display: true}

                    ],

                    throwOnError: false

                });

            }

        }

    });

}

// --- Qualitative Analysis & Recommendation Advisor Engine ---



function updateParetoQualitativeAdvice(grandTotal) {

    const el = document.getElementById('pareto-knowledge');

    if (!el) return;

    

    if (appState.checksheet.compiled.length === 0 || grandTotal === 0) {

        el.innerHTML = `<p class="help-text">Compile the Step 1 Check Sheet to see Pareto prioritizing advice.</p>`;

        return;

    }

    

    const topDefect = appState.checksheet.compiled[0].name;

    const topPct = appState.checksheet.compiled[0].rate;

    

    let adviceHTML = `<h5><i class="fa-solid fa-graduation-cap"></i> Practitioner Insight: Pareto Prioritization</h5>`;

    

    if (topPct >= 40) {

        adviceHTML += `

            <p><strong>Juran's Focus Rule (Vital Few):</strong> The top defect category <strong>${topDefect}</strong> accounts for <strong>${topPct.toFixed(1)}%</strong> of all occurrences. Lean guidelines recommend dedicating 100% of immediately available engineering bandwidth to this single defect node. Restrict active 5-Why projects to this priority.</p>

            <p><strong>Warning:</strong> Ensure raw frequency matches cost severity. If a lower-volume defect costs 10x more to scrap than a scratch, re-weight by financial cost (COPQ) and adjust priority.</p>

        `;

    } else {

        adviceHTML += `

            <p><strong>Flat Distribution Detected:</strong> The highest defect category <strong>${topDefect}</strong> accounts for only <strong>${topPct.toFixed(1)}%</strong> of errors. This indicates the process is suffering from systemic instability rather than a single assignable error source. Do not run micro 5-Why traces. Perform a general <strong>5S audit</strong> or <strong>Standard Work validation</strong> across all stations to raise baseline controls first.</p>

        `;

    }

    el.innerHTML = adviceHTML;

}



function updateFiveWhyQualitativeAdvice() {

    const el = document.getElementById('fivewhy-knowledge');

    if (!el) return;

    

    let humanErrorFound = false;

    let violatingRoot = "";

    let validRootCount = 0;

    let sampleRoot = "";

    let sampleImmediate = "";

    

    appState.fishbone.causes.forEach(cause => {

        if (cause.root && cause.root.trim() !== '') {

            validRootCount++;

            sampleRoot = cause.root;

            sampleImmediate = cause.text;

            

            const terms = ['operator', 'human', 'careless', 'forget', 'forgot', 'negligence', 'fatigue', 'mistake', 'error', 'laziness', 'oversight'];

            const lowerRoot = cause.root.toLowerCase();

            terms.forEach(t => {

                if (lowerRoot.includes(t)) {

                    humanErrorFound = true;

                    violatingRoot = cause.root;

                }

            });

        }

    });

    

    let adviceHTML = `<h5><i class="fa-solid fa-graduation-cap"></i> Practitioner Insight: Root Cause Validation</h5>`;

    

    if (humanErrorFound) {

        adviceHTML = `

            <h5><i class="fa-solid fa-triangle-exclamation" style="color: var(--danger);"></i> System Warning: Human Error Trap</h5>

            <p>Your defined root cause (<em>"${violatingRoot}"</em>) points directly to operator error. <strong>Deming and Ohno warn that human error is a symptom of poor system design, never a root cause.</strong></p>

            <p>Ask: <em>'Why did the system design allow this error to occur?'</em> Deploy physical mistake-proofing (Poka-Yoke), standardize visual checklists, or restructure the workstation layout to make the error physically impossible.</p>

        `;

    } else if (validRootCount > 0) {

        adviceHTML += `

            <p><strong>The "Therefore" Test:</strong> Read your chain backwards using "therefore" to verify logical causation: <em>${sampleRoot}</em> \(\rightarrow\) therefore \(\rightarrow\) ... \(\rightarrow\) therefore <em>${sampleImmediate}</em>. If the sequence holds, your root cause is valid.</p>

            <p><strong>Action:</strong> Define clear mistake-proofing safeguards (Poka-Yoke) for each validated root cause to ensure permanent process control.</p>

        `;

    } else {

        adviceHTML += `

            <p><strong>Ishikawa brain-mapping:</strong> Ensure you have investigated across all 6M dimensions (Man, Machine, Method, Material, Measurement, Milieu/Mother Nature) to prevent team confirmation bias.</p>

        `;

    }

    

    el.innerHTML = adviceHTML;

    

    // Render KaTeX in the fivewhy advice box

    if (window.renderMathInElement) {

        window.renderMathInElement(el, {

            delimiters: [

                {left: '$$', right: '$$', display: true},

                {left: '$', right: '$', display: false},

                {left: '\\(', right: '\\)', display: false},

                {left: '\\[', right: '\\]', display: true}

            ],

            throwOnError: false

        });

    }

}



function updateCapabilityQualitativeAdvice(cp, cpk, mean, stdDev) {

    const el = document.getElementById('capability-knowledge');

    if (!el) return;

    

    let adviceHTML = `<h5><i class="fa-solid fa-graduation-cap"></i> Practitioner Insight: Capability Analysis</h5>`;

    const lsl = appState.capability.lsl;

    const usl = appState.capability.usl;

    const nominal = (lsl + usl) / 2;

    

    if (cpk >= 1.33) {

        adviceHTML += `

            <p><strong>Process is Capable (\(C_{pk} = ${cpk.toFixed(2)}\)):</strong> The natural process spread is narrow and well-centered within specifications. Maintain current setups. Monitor for shifts using SPC charts.</p>

        `;

    } else if (cp >= 1.33 && cpk < 1.33) {

        adviceHTML += `

            <p><strong>Centering Opportunity (\(C_p = ${cp.toFixed(2)}\), \(C_{pk} = ${cpk.toFixed(2)}\)):</strong> The potential capability is sufficient, meaning the process width fits within specifications. However, the process mean (\(\mu = ${mean.toFixed(2)}\)) is shifted off-center relative to nominal spec (\(${nominal.toFixed(2)}\)).</p>

            <p><strong>Lean Intervention:</strong> Center the machine settings (calibrate tools, align fixtures, adjust target temperature). <strong>Do not alter the process variability parameter settings</strong>.</p>

        `;

    } else {

        adviceHTML += `

            <p><strong>Variability Deficit (\(C_p = ${cp.toFixed(2)}\), \(C_{pk} = ${cpk.toFixed(2)}\)):</strong> The natural variability spread is too wide. Centering alone will not make the process capable. The machinery is physically incapable of hitting spec limits consistently.</p>

            <p><strong>Lean Intervention:</strong> Contract the variance spread. Re-engineer inputs, rebuild tooling, or narrow tolerances. Deploy 100% sorting audits immediately to protect clients.</p>

        `;

    }

    

    el.innerHTML = adviceHTML;

    

    // Render KaTeX in the capability advice box

    if (window.renderMathInElement) {

        window.renderMathInElement(el, {

            delimiters: [

                {left: '$$', right: '$$', display: true},

                {left: '$', right: '$', display: false},

                {left: '\\(', right: '\\)', display: false},

                {left: '\\[', right: '\\]', display: true}

            ],

            throwOnError: false

        });

    }

}



function updateScatterQualitativeAdvice(r) {

    const el = document.getElementById('scatter-knowledge');

    if (!el) return;

    

    const rAbs = Math.abs(r);

    let adviceHTML = `<h5><i class="fa-solid fa-graduation-cap"></i> Practitioner Insight: Correlation &amp; Causality</h5>`;

    

    if (rAbs >= 0.8) {

        adviceHTML += `

            <p><strong>Strong Correlation (\(r = ${r.toFixed(3)}\)):</strong> A strong statistical relationship exists between <strong>${appState.scatter.xLabel}</strong> and <strong>${appState.scatter.yLabel}</strong>. Lock down variable X within operating standards to control Y.</p>

            <p><strong>Warning (Causation):</strong> Remember that mathematical covariance does not equal physical causation. Perform physical verification runs at the machine before altering process layouts.</p>

        `;

    } else if (rAbs >= 0.3) {

        adviceHTML += `

            <p><strong>Moderate Correlation (\(r = ${r.toFixed(3)}\)):</strong> There is a mild correlation. Other hidden parameters (material differences, room humidity, operator experience) are acting as confounding factors.</p>

            <p><strong>Action:</strong> Run a Design of Experiments (DOE) or multi-variable regression instead of adjusting parameters in isolation.</p>

        `;

    } else {

        adviceHTML += `

            <p><strong>No Correlation (\(r = ${r.toFixed(3)}\)):</strong> Changes in <strong>${appState.scatter.xLabel}</strong> do not systematically influence <strong>${appState.scatter.yLabel}</strong>. Do not waste engineering cycles adjusting X; investigate alternative variables.</p>

        `;

    }

    

    el.innerHTML = adviceHTML;

    

    // Render KaTeX in the scatter advice box

    if (window.renderMathInElement) {

        window.renderMathInElement(el, {

            delimiters: [

                {left: '$$', right: '$$', display: true},

                {left: '$', right: '$', display: false},

                {left: '\\(', right: '\\)', display: false},

                {left: '\\[', right: '\\]', display: true}

            ],

            throwOnError: false

        });

    }

}



function updateControlQualitativeAdvice(values, mean, ucl, lcl, stdDev) {

    const el = document.getElementById('control-knowledge');

    if (!el) return;

    

    let rule1Violation = [];

    let rule2Violation = false;

    let rule3Violation = false;

    

    // Rule 1: Point outside UCL/LCL

    values.forEach((v, idx) => {

        if (v > ucl || v < lcl) {

            rule1Violation.push(idx + 1);

        }

    });

    

    // Rule 2: 7 consecutive points on one side of mean

    let countSide = 0;

    let currentSide = 0; // 1 = above, -1 = below

    for (let i = 0; i < values.length; i++) {

        const side = values[i] > mean ? 1 : (values[i] < mean ? -1 : 0);

        if (side !== 0) {

            if (side === currentSide) {

                countSide++;

                if (countSide >= 7) {

                    rule2Violation = true;

                }

            } else {

                currentSide = side;

                countSide = 1;

            }

        } else {

            countSide = 0;

            currentSide = 0;

        }

    }

    

    // Rule 3: 6 consecutive points steadily increasing or decreasing

    let countTrend = 0;

    let currentTrend = 0; // 1 = increasing, -1 = decreasing

    for (let i = 1; i < values.length; i++) {

        const diff = values[i] - values[i-1];

        const trend = diff > 0 ? 1 : (diff < 0 ? -1 : 0);

        if (trend !== 0) {

            if (trend === currentTrend) {

                countTrend++;

                if (countTrend >= 5) { // 5 transitions = 6 consecutive points

                    rule3Violation = true;

                }

            } else {

                currentTrend = trend;

                countTrend = 1;

            }

        } else {

            countTrend = 0;

            currentTrend = 0;

        }

    }

    

    let adviceHTML = `<h5><i class="fa-solid fa-graduation-cap"></i> Practitioner Insight: Process Control (SPC)</h5>`;

    

    if (rule1Violation.length > 0 || rule2Violation || rule3Violation) {

        adviceHTML += `<p><strong>Process is UNSTABLE / OUT OF CONTROL.</strong> Special cause variation detected:</p><ul style='margin-left: 15px;'>`;

        if (rule1Violation.length > 0) {

            adviceHTML += `<li><strong>Nelson Rule 1 (Out of Limits):</strong> Points at runs <strong>[${rule1Violation.join(', ')}]</strong> exceed the UCL/LCL limits (\(\pm3\sigma\)). This represents sudden, assignable shocks. Check for physical tool breaks, pressure surges, or raw material drops at those runs.</li>`;

        }

        if (rule2Violation) {

            adviceHTML += `<li><strong>Nelson Rule 2 (Process Shift):</strong> A run of 7+ points on one side of the mean indicates a systemic shift (e.g. new operator, fixture wear, new supplier batch). Adjust center calibration.</li>`;

        }

        if (rule3Violation) {

            adviceHTML += `<li><strong>Nelson Rule 3 (Trend):</strong> A steady run of 6+ points increasing/decreasing indicates gradual wear (tooling degradation, cooling decay, dirt buildup). Perform preventative maintenance.</li>`;

        }

        adviceHTML += `</ul>`;

    } else {

        adviceHTML += `

            <p><strong>Process is Stable:</strong> Variation is purely common-cause. <strong>Deming's Tampering Rule:</strong> Do not make adjustments to the machine. Adjusting a stable process in response to normal deviations near the limits increases overall variation.</p>

        `;

    }

    

    el.innerHTML = adviceHTML;

    

    // Render KaTeX in the control advice box

    if (window.renderMathInElement) {

        window.renderMathInElement(el, {

            delimiters: [

                {left: '$$', right: '$$', display: true},

                {left: '$', right: '$', display: false},

                {left: '\\(', right: '\\)', display: false},

                {left: '\\[', right: '\\]', display: true}

            ],

            throwOnError: false

        });

    }

}




// ==========================================
// STEP 8: LEAN & QUALITY DECISION ENGINE (RAG KB)
// ==========================================

const kbDatabase = {
    copq: {
        title: "Cost of Poor Quality (COPQ) Knowledge Card",
        theory: `
            <h4>Theoretical Foundation</h4>
            <p><strong>Garvin's Era 3 Quality Cost Model:</strong> Armand Feigenbaum (1956) and Joseph M. Juran established that the cost of poor quality (COPQ) is a strategic lever, not just an accounting category. Most firms lose <strong>10% to 30%</strong> of their revenues to visible and hidden quality failures (ASQ, 2022). Juran classified COPQ into four distinct categories:</p>
            <ul>
                <li><strong>Prevention Costs:</strong> Investments in process design, training (TWI), 5S, and mistake-proofing (Poka-Yoke) to prevent errors at the source.</li>
                <li><strong>Appraisal Costs:</strong> Expenses of checking, inspections, calibration, and audits to catch defects before they move forward.</li>
                <li><strong>Internal Failure Costs:</strong> Costs of defects caught inside the facility (rework, scrap, downtime, capacity loss).</li>
                <li><strong>External Failure Costs:</strong> Costs of defects reaching the customer (warranties, recalls, support labor, reputation loss).</li>
            </ul>
            <p><strong>The Feigenbaum/Juran Ratio:</strong> In Era 2 inspection-centric systems, appraisal and failure costs dominate (90-95% of COPQ). Dynamic Era 4 Lean Quality systems pivot spending toward prevention. By increasing prevention costs by 1%, appraisal and failure costs drop by 5% to 10% (the Feigenbaum leverage effect).</p>
        `,
        inputsHTML: `
            <div class="form-row-2col" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div class="form-group">
                    <label class="form-label" style="font-size: 12px;">Visible External Failures (₹ Cr)</label>
                    <input type="number" id="kb-sim-external" class="form-control" value="4.2" step="0.1">
                </div>
                <div class="form-group">
                    <label class="form-label" style="font-size: 12px;">Prevention Cost (₹ Cr)</label>
                    <input type="number" id="kb-sim-prevention" class="form-control" value="0.8" step="0.1">
                </div>
            </div>
            <div class="form-group" style="margin-top: 10px;">
                <label class="form-label" style="font-size: 12px;">Estimated Hidden Failures Multiplier (e.g. Iceberg Factor: 2x to 4x)</label>
                <input type="number" id="kb-sim-multiplier" class="form-control" value="3" min="1" max="10">
            </div>
        `,
        loadData: function() {
            const extVal = document.getElementById('copq-external') ? document.getElementById('copq-external').value : '4.2';
            const prevVal = document.getElementById('copq-prevention') ? document.getElementById('copq-prevention').value : '0.8';
            document.getElementById('kb-sim-external').value = extVal;
            document.getElementById('kb-sim-prevention').value = prevVal;
            document.getElementById('kb-sim-multiplier').value = 3;
        },
        simulate: function() {
            const external = parseFloat(document.getElementById('kb-sim-external').value) || 0;
            const prevention = parseFloat(document.getElementById('kb-sim-prevention').value) || 0;
            const mult = parseFloat(document.getElementById('kb-sim-multiplier').value) || 1;
            
            const hiddenFailures = external * (mult - 1);
            const totalCOPQ = prevention + hiddenFailures + external;
            
            let advice = `
                <p><strong>Assessment:</strong> Your estimated hidden quality losses are <strong>₹ ${hiddenFailures.toFixed(2)} Cr</strong>, representing the submerged portion of the COPQ Iceberg (loss of customer goodwill, process delays, design changes).</p>
                <p><strong>Theoretical Guidance (Feigenbaum's Leverage):</strong> You are spending <strong>₹ ${prevention.toFixed(2)} Cr</strong> on Prevention. If your total COPQ is high, you are under-investing in Prevention.</p>
                <div class="stability-verdict" style="background: rgba(230, 81, 0, 0.1); color: #E65100; padding: 12px; border-radius: 4px; margin-top: 10px; border-left: 3px solid #E65100;">
                    <strong>Implementation Tip:</strong> Increase prevention investments by 20% focusing on Standard Work audits and Poka-Yoke tool updates. For every ₹1 Cr spent on preventing errors, you will save ₹5 Cr to ₹10 Cr in scrap and warranty returns.
                </div>
            `;
            return advice;
        }
    },
    checksheet: {
        title: "Check Sheet (Tally & Log) Knowledge Card",
        theory: `
            <h4>Theoretical Foundation</h4>
            <p><strong>First Step of the 7 QC Pipeline:</strong> The Check Sheet converts unstructured operational occurrences into categorized, time-series data. It is the fundamental record layer that enables Pareto prioritization. Dr. Kaoru Ishikawa emphasized that checking data must happen at the Gemba (real work place) by operators in real-time, using clear symbols rather than descriptive writing to avoid subjectivity.</p>
            <p><strong>Garvin's Era 3 Standardization:</strong> Check Sheets are designed to align with Standard Operating Procedures (SOPs). They log defect mode, time, shift, and station. If the check sheet doesn't link defect categories to specific manufacturing cell origins, stratification becomes impossible.</p>
        `,
        inputsHTML: `
            <div class="form-row-2col" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div class="form-group">
                    <label class="form-label" style="font-size: 12px;">Total Defects Tallied</label>
                    <input type="number" id="kb-sim-check-total" class="form-control" value="159">
                </div>
                <div class="form-group">
                    <label class="form-label" style="font-size: 12px;">Number of Stations Inspected</label>
                    <input type="number" id="kb-sim-check-stations" class="form-control" value="4">
                </div>
            </div>
        `,
        loadData: function() {
            let total = 0;
            if (appState && appState.checksheet) {
                appState.checksheet.data.forEach(row => {
                    row.stations.forEach(val => total += val);
                });
            }
            document.getElementById('kb-sim-check-total').value = total || 159;
            document.getElementById('kb-sim-check-stations').value = (appState && appState.checksheet && appState.checksheet.stations.length) || 4;
        },
        simulate: function() {
            const total = parseInt(document.getElementById('kb-sim-check-total').value) || 0;
            const stations = parseInt(document.getElementById('kb-sim-check-stations').value) || 1;
            
            const avgDefects = total / stations;
            
            let advice = `
                <p><strong>Assessment:</strong> Your process averages <strong>${avgDefects.toFixed(1)} defects</strong> per station. This indicates a high level of operational noise across the line.</p>
                <p><strong>Decision Tip (Juran's Diagnosis):</strong> Avoid standardizing work on a line with high defect averages. First use the Check Sheet to segment data. If defects are evenly distributed, audit material inputs. If they are highly concentrated, use stratification mapping.</p>
                <div class="stability-verdict" style="background: rgba(0, 121, 107, 0.1); color: #00796B; padding: 12px; border-radius: 4px; margin-top: 10px; border-left: 3px solid #00796B;">
                    <strong>Implementation Tip:</strong> Ensure check sheets are placed directly at the work cell. Operator checking must take less than 10 seconds per cycle. Implement hourly tally charts (Andon boards) to visualize shifts immediately.
                </div>
            `;
            return advice;
        }
    },
    pareto: {
        title: "Pareto Analysis (The Vital Few) Knowledge Card",
        theory: `
            <h4>Theoretical Foundation</h4>
            <p><strong>Juran's Principle of the Vital Few:</strong> Joseph M. Juran codified the 80/20 rule for quality control. It dictates that 80% of process problems stem from 20% of the defect categories (the "vital few"). The remaining 80% of categories represent the "trivial many" (or "useful many"). Focusing engineering attention on the top 1 or 2 failure modes yields the fastest quality breakthrough.</p>
            <p><strong>Garvin's Quality Era 3 Focus:</strong> Trying to fix everything at once disperses organizational energy. It leads to shallow, temporary adjustments ("tampering") rather than root-cause eradication.</p>
        `,
        inputsHTML: `
            <div class="form-row-2col" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div class="form-group">
                    <label class="form-label" style="font-size: 12px;">Top Defect Percentage (%)</label>
                    <input type="number" id="kb-sim-pareto-pct" class="form-control" value="41" min="1" max="100">
                </div>
                <div class="form-group">
                    <label class="form-label" style="font-size: 12px;">Cumulative % of Top 2 Defects</label>
                    <input type="number" id="kb-sim-pareto-top2" class="form-control" value="64" min="1" max="100">
                </div>
            </div>
        `,
        loadData: function() {
            let total = 0;
            const categoriesMap = {};
            if (appState && appState.checksheet) {
                appState.checksheet.data.forEach(row => {
                    let catTotal = 0;
                    row.stations.forEach(val => catTotal += val);
                    categoriesMap[row.name] = catTotal;
                    total += catTotal;
                });
            }
            const sorted = Object.entries(categoriesMap).sort((a,b) => b[1] - a[1]);
            if (sorted.length > 0 && total > 0) {
                const pct = (sorted[0][1] / total) * 100;
                document.getElementById('kb-sim-pareto-pct').value = Math.round(pct);
                const pct2 = sorted.length > 1 ? pct + (sorted[1][1] / total) * 100 : pct;
                document.getElementById('kb-sim-pareto-top2').value = Math.round(pct2);
            } else {
                document.getElementById('kb-sim-pareto-pct').value = 41;
                document.getElementById('kb-sim-pareto-top2').value = 64;
            }
        },
        simulate: function() {
            const pct = parseFloat(document.getElementById('kb-sim-pareto-pct').value) || 0;
            const top2 = parseFloat(document.getElementById('kb-sim-pareto-top2').value) || 0;
            
            let advice = "";
            if (pct >= 40) {
                advice = `
                    <p><strong>Assessment (Strong Concentration):</strong> The top defect accounts for <strong>${pct.toFixed(0)}%</strong> of all quality failures. This is a classic Pareto distribution.</p>
                    <p><strong>Recommendation:</strong> Halt all other minor quality initiatives. Focus 100% of engineering bandwidth on this single item. Use Fishbone and 5-Why on this failure mode only.</p>
                `;
            } else {
                advice = `
                    <p><strong>Assessment (Flat Distribution):</strong> The top defect only accounts for <strong>${pct.toFixed(0)}%</strong>. Problems are dispersed across multiple categories.</p>
                    <p><strong>Recommendation:</strong> Focus on standard work compliance and 5S cleanliness rather than complex engineering changes. A flat Pareto indicates general process control instability rather than a single technical failure.</p>
                `;
            }
            
            advice += `
                <div class="stability-verdict" style="background: rgba(30, 136, 229, 0.1); color: #1E88E5; padding: 12px; border-radius: 4px; margin-top: 10px; border-left: 3px solid #1E88E5;">
                    <strong>Juran's Severity Rule:</strong> Always check if a minor-count defect has higher financial impact than the top-count defect. Align your Pareto chart by cost (COPQ impact) rather than count to ensure business relevance.
                </div>
            `;
            return advice;
        }
    },
    fishbone: {
        title: "Ishikawa & 5-Why (Root-Cause) Knowledge Card",
        theory: `
            <h4>Theoretical Foundation</h4>
            <p><strong>Dr. Kaoru Ishikawa's 6M Framework:</strong> The Fishbone diagram structures brainstorming across Man, Machine, Material, Method, Measurement, and Mother Nature. This prevents bias (e.g., maintenance blaming operators, operators blaming machines). Ishikawa emphasized that the Fishbone lists *hypotheses*, which must be verified with data, not opinions.</p>
            <p><strong>The 5-Why System (Shigeo Shingo &amp; Taiichi Ohno):</strong> Developed at Toyota, 5-Why drills down to systemic organizational policies. Shingo warned against the "Human Error" trap: human mistakes are always symptoms of poor system design, never the true root cause. True root causes must point to lack of visual standard work (5S), inadequate cross-training, or lack of mistake-proofing (Poka-Yoke).</p>
        `,
        inputsHTML: `
            <div class="form-group">
                <label class="form-label" style="font-size: 12px;">Enter your Ultimate Root Cause (5th Why):</label>
                <input type="text" id="kb-sim-why" class="form-control" value="Operator missed thermocouple check due to lack of training">
            </div>
        `,
        loadData: function() {
            if (appState && appState.fishbone && appState.fishbone.rootCauses.length > 0) {
                document.getElementById('kb-sim-why').value = appState.fishbone.rootCauses[0].whys[4] || appState.fishbone.rootCauses[0].whys[0];
            } else {
                document.getElementById('kb-sim-why').value = "Operator was tired and made a mistake";
            }
        },
        simulate: function() {
            const whyText = document.getElementById('kb-sim-why').value.toLowerCase();
            
            const humanErrorTerms = ["operator", "human", "careless", "mistake", "negligence", "fatigue", "tired", "personnel", "staff error"];
            let hasHumanError = false;
            humanErrorTerms.forEach(term => {
                if (whyText.includes(term)) hasHumanError = true;
            });
            
            let advice = "";
            if (hasHumanError) {
                advice = `
                    <div style="background: rgba(211, 47, 47, 0.1); color: #D32F2F; padding: 12px; border-radius: 4px; border-left: 4px solid #D32F2F; margin-bottom: 10px;">
                        <strong>⚠️ Human Error Trap Detected!</strong> Your root cause ("${document.getElementById('kb-sim-why').value}") points directly to operator error. According to Shigeo Shingo, this is invalid. Operators make mistakes when the process permits them to.
                    </div>
                    <p><strong>Qualitative Suggestion:</strong> Dig deeper. Why was the operator allowed to make the mistake? Is there a physical mistake-proofing (Poka-Yoke) mechanism? Is there a visual standard work checklist? Rephrase the root cause to target the <em>process design failure</em>, not the person.</p>
                `;
            } else {
                advice = `
                    <p><strong>Assessment:</strong> Root cause "${document.getElementById('kb-sim-why').value}" successfully targets process parameters, tooling, or systemic schedules.</p>
                    <p><strong>Decision Tip (The Therefore Test):</strong> Verify the causation flow backward: <em>${document.getElementById('kb-sim-why').value}</em> $\rightarrow$ therefore $\rightarrow$ defect generated. If the link holds, proceed with implementation.</p>
                `;
            }
            
            advice += `
                <div class="stability-verdict" style="background: rgba(0, 121, 107, 0.1); color: #00796B; padding: 12px; border-radius: 4px; margin-top: 10px; border-left: 3px solid #00796B;">
                    <strong>Lean Action (Poka-Yoke Levels):</strong> Aim for Level 1 Poka-Yoke (process physically cannot run if defect condition exists) rather than Level 3 (warning buzzer). Prevent errors, don't just detect them.
                </div>
            `;
            return advice;
        }
    },
    capability: {
        title: "Capability Studies (Cp/Cpk) Knowledge Card",
        theory: `
            <h4>Theoretical Foundation</h4>
            <p><strong>Montgomery's Statistical Quality Control:</strong> Process capability indexes ($C_p, C_{pk}$) measure the process's ability to produce units within specification limits. The potential capability index ($C_p$) measures the spread of the process width relative to the specs. The actual capability index ($C_{pk}$) accounts for the alignment of the process mean.</p>
            <ul>
                <li><strong>$C_p \ge 1.33$</strong>: Process variability is narrow enough. It can produce less than 64 ppm defects if centered.</li>
                <li><strong>$C_{pk} < 1.33$</strong>: The process is not capable. If $C_p$ is high but $C_{pk}$ is low, the process is off-center.</li>
            </ul>
            <p><strong>Deming's Rule on Tampering:</strong> Trying to adjust machine settings to fix variation in a process with $C_p < 1.0$ is called tampering. It increases total variation, making the output worse.</p>
        `,
        inputsHTML: `
            <div class="form-row-2col" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div class="form-group">
                    <label class="form-label" style="font-size: 12px;">Cp Value</label>
                    <input type="number" id="kb-sim-cp" class="form-control" value="1.13" step="0.01">
                </div>
                <div class="form-group">
                    <label class="form-label" style="font-size: 12px;">Cpk Value</label>
                    <input type="number" id="kb-sim-cpk" class="form-control" value="0.77" step="0.01">
                </div>
            </div>
        `,
        loadData: function() {
            const cpVal = parseFloat(document.getElementById('cap-cp-val')?.innerText) || 1.13;
            const cpkVal = parseFloat(document.getElementById('cap-cpk-val')?.innerText) || 0.77;
            document.getElementById('kb-sim-cp').value = cpVal;
            document.getElementById('kb-sim-cpk').value = cpkVal;
        },
        simulate: function() {
            const cp = parseFloat(document.getElementById('kb-sim-cp').value) || 0;
            const cpk = parseFloat(document.getElementById('kb-sim-cpk').value) || 0;
            
            let advice = "";
            if (cp >= 1.33 && cpk < 1.33) {
                advice = `
                    <div style="background: rgba(0, 121, 107, 0.1); color: #00796B; padding: 12px; border-radius: 4px; border-left: 4px solid #00796B; margin-bottom: 10px;">
                        <strong>🎯 Centering Opportunity Identified!</strong> Cp is high (${cp.toFixed(2)}), which means the physical process spread fits inside specs. However, Cpk is low (${cpk.toFixed(2)}).
                    </div>
                    <p><strong>Recommendation:</strong> Adjust the machine setting / process mean centering (mean target shift). Do NOT tamper with variation settings or tooling tolerances, as the width is already capable. Simple recalibration will yield immediate capabilty ($C_{pk} \ge 1.33$).</p>
                `;
            } else if (cp < 1.33) {
                advice = `
                    <div style="background: rgba(211, 47, 47, 0.1); color: #D32F2F; padding: 12px; border-radius: 4px; border-left: 4px solid #D32F2F; margin-bottom: 10px;">
                        <strong>⚠️ Variability Deficit (Incapable Spread)!</strong> Cp is low (${cp.toFixed(2)}). Centering the process mean will not solve the defect issue.
                    </div>
                    <p><strong>Recommendation:</strong> You must physically contract the process variation. This requires purchasing tighter-tolerance tooling, upgrading machine components, or switching to higher-quality raw materials. Mean alignment is secondary.</p>
                `;
            } else {
                advice = `
                    <p><strong>Assessment (Fully Capable):</strong> Both Cp (${cp.toFixed(2)}) and Cpk (${cpk.toFixed(2)}) exceed the 1.33 benchmark. The process is highly capable.</p>
                    <p><strong>Decision Tip:</strong> Maintain regular audits. Do not alter parameters; focus on sustaining current work standards and monitoring for drift using SPC charts.</p>
                `;
            }
            return advice;
        }
    },
    scatter: {
        title: "Scatter Diagrams (Correlation) Knowledge Card",
        theory: `
            <h4>Theoretical Foundation</h4>
            <p><strong>Galvin's Dimension of Confounding:</strong> The Scatter Diagram plots an independent variable X against a dependent variable Y to check for correlation (represented by Pearson's $r$). Ishikawa warned that correlation does not mean causation. A strong relationship can be caused by a third, unmonitored confounding variable.</p>
            <p><strong>Pearson $r$ Value Rules:</strong></p>
            <ul>
                <li><strong>$|r| \ge 0.8$</strong>: Strong correlation. High confidence of statistical link.</li>
                <li><strong>$0.5 \le |r| < 0.8$</strong>: Moderate correlation. Process noise or other factors are acting on Y.</li>
                <li><strong>$|r| < 0.5$</strong>: Weak/No correlation. Adjusting X will not control Y.</li>
            </ul>
        `,
        inputsHTML: `
            <div class="form-group">
                <label class="form-label" style="font-size: 12px;">Pearson Correlation Coefficient (r-Value)</label>
                <input type="number" id="kb-sim-r" class="form-control" value="-0.98" step="0.01" min="-1" max="1">
            </div>
        `,
        loadData: function() {
            const rVal = parseFloat(document.getElementById('scatter-r-val')?.innerText) || -0.98;
            document.getElementById('kb-sim-r').value = rVal;
        },
        simulate: function() {
            const r = parseFloat(document.getElementById('kb-sim-r').value) || 0;
            const rAbs = Math.abs(r);
            
            let advice = "";
            if (rAbs >= 0.8) {
                advice = `
                    <p><strong>Assessment (Strong Correlation):</strong> Pearson's r is <strong>${r.toFixed(3)}</strong>, indicating a strong statistical link.</p>
                    <p><strong>Recommendation:</strong> Lock down parameter X within narrow operating standards. Because Y reacts directly to X, controlling X will stabilise Y. Run a physical confirmatory test on the floor to verify physical causation.</p>
                `;
            } else if (rAbs >= 0.5) {
                advice = `
                    <p><strong>Assessment (Moderate Correlation):</strong> Pearson's r is <strong>${r.toFixed(3)}</strong>. The relationship is fuzzy.</p>
                    <p><strong>Recommendation:</strong> Do not rely solely on X to control Y. Implement a Design of Experiments (DOE) audit to test X alongside secondary factors like temperature, operator shifts, or raw material batches.</p>
                `;
            } else {
                advice = `
                    <p><strong>Assessment (No Correlation):</strong> Pearson's r is <strong>${r.toFixed(3)}</strong>, indicating no statistical link.</p>
                    <p><strong>Recommendation:</strong> Stop adjusting parameter X on the floor. Doing so is tampering and increases process instability. Investigate entirely different inputs or methods to find a link to Y.</p>
                `;
            }
            return advice;
        }
    },
    control: {
        title: "SPC Control Charts (Nelson Rules) Knowledge Card",
        theory: `
            <h4>Theoretical Foundation</h4>
            <p><strong>Walter Shewhart's SPC Philosophy:</strong> Shewhart established that all processes exhibit variation. He segmented variation into:
            <ul>
                <li><strong>Common-cause variation:</strong> Natural noise of the process. Stable over time, predictable. Trying to adjust a process for common-cause variation increases total variability (Deming's Tampering Rule).</li>
                <li><strong>Special-cause variation:</strong> Sudden shifts, failures, or shocks. Unstable and unpredictable. Requires immediate intervention.</li>
            </ul>
            <p><strong>Nelson Rules (Montgomery):</strong> SPC charts check for special-cause variation using Nelson Rules. Rule 1: A point exceeds UCL/LCL limits ($\pm3\sigma$). Rule 2: 7 consecutive points on one side of the mean (shift in process average). Rule 3: 6 consecutive points in a trend (linear drift).</p>
        `,
        inputsHTML: `
            <div class="form-row-2col" style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div class="form-group">
                    <label class="form-label" style="font-size: 12px;">Out-of-Limit Points (violations)</label>
                    <input type="number" id="kb-sim-ctrl-violations" class="form-control" value="2">
                </div>
                <div class="form-group">
                    <label class="form-label" style="font-size: 12px;">Mean Shift (7 consecutive points on one side)?</label>
                    <select id="kb-sim-ctrl-shift" class="form-control">
                        <option value="no">No</option>
                        <option value="yes">Yes (Process Shift)</option>
                    </select>
                </div>
            </div>
        `,
        loadData: function() {
            document.getElementById('kb-sim-ctrl-violations').value = 2; // defaults
            document.getElementById('kb-sim-ctrl-shift').value = 'no';
        },
        simulate: function() {
            const violations = parseInt(document.getElementById('kb-sim-ctrl-violations').value) || 0;
            const shift = document.getElementById('kb-sim-ctrl-shift').value;
            
            let advice = "";
            if (violations > 0) {
                advice += `
                    <div style="background: rgba(211, 47, 47, 0.1); color: #D32F2F; padding: 12px; border-radius: 4px; border-left: 4px solid #D32F2F; margin-bottom: 10px;">
                        <strong>⚠️ Special-Cause Violations Detected (${violations} runs)!</strong> Points exceed statistical control boundaries ($\pm3\sigma$).
                    </div>
                    <p><strong>Recommendation:</strong> Stop the line. Investigate sudden, assignable shocks. Check for physical tool breakage, electrical loading fluctuations, raw material batch changes, or power trips at those specific intervals.</p>
                `;
            }
            if (shift === 'yes') {
                advice += `
                    <div style="background: rgba(230, 81, 0, 0.1); color: #E65100; padding: 12px; border-radius: 4px; border-left: 4px solid #E65100; margin-top: 10px;">
                        <strong>⚠️ Process Mean Shift (Run Rule Violation)!</strong> 7 consecutive points on one side of the mean indicates a persistent target shift.
                    </div>
                    <p><strong>Recommendation:</strong> Troubleshoot systemic changes. Check for wear on tooling, thermocouple calibration shifts, changes in standard operating procedures, or new operator onboarding.</p>
                `;
            }
            if (violations === 0 && shift === 'no') {
                advice = `
                    <p><strong>Assessment (Process is Stable):</strong> The process is in statistical control. No special-cause variations detected.</p>
                    <p><strong>Recommendation (Deming's Warning):</strong> Do NOT adjust machine settings. Any adjustment of a stable process is tampering, which increases total variability. Focus on long-term standard maintenance.</p>
                `;
            }
            return advice;
        }
    }
};

function initDecisionEngine() {
    const toolButtons = document.querySelectorAll('.kb-tool-btn');
    const titleEl = document.getElementById('kb-title');
    const theoryContainer = document.getElementById('kb-theory-container');
    const inputsContainer = document.getElementById('kb-simulator-inputs-container');
    const simulateBtn = document.getElementById('kb-simulate-btn');
    const loadWorkspaceBtn = document.getElementById('kb-load-workspace-btn');
    const outputBox = document.getElementById('kb-simulator-output-box');
    const outputText = document.getElementById('kb-simulator-output-text');

    let selectedTool = 'copq';

    const loadToolInfo = (toolKey) => {
        selectedTool = toolKey;
        const toolData = kbDatabase[toolKey];
        if (toolData) {
            titleEl.innerHTML = `<i class="fa-solid fa-book-open"></i> ${toolData.title}`;
            theoryContainer.innerHTML = toolData.theory;
            inputsContainer.innerHTML = toolData.inputsHTML;
            outputBox.classList.add('hidden');
            
            // Render equations using KaTeX if available
            if (window.renderMathInElement) {
                window.renderMathInElement(theoryContainer, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '$', right: '$', display: false},
                        {left: '\\(', right: '\\)', display: false},
                        {left: '\\[', right: '\\]', display: true}
                    ],
                    throwOnError: false
                });
            }
            
            // Auto load values from current screen state
            toolData.loadData();
        }
    };

    toolButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            toolButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const toolKey = btn.getAttribute('data-tool');
            loadToolInfo(toolKey);
        });
    });

    simulateBtn.addEventListener('click', () => {
        const toolData = kbDatabase[selectedTool];
        if (toolData) {
            const reportHTML = toolData.simulate();
            outputText.innerHTML = reportHTML;
            outputBox.classList.remove('hidden');

            if (window.renderMathInElement) {
                window.renderMathInElement(outputText, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '$', right: '$', display: false},
                        {left: '\\(', right: '\\)', display: false},
                        {left: '\\[', right: '\\]', display: true}
                    ],
                    throwOnError: false
                });
            }
        }
    });

    loadWorkspaceBtn.addEventListener('click', () => {
        const toolData = kbDatabase[selectedTool];
        if (toolData) {
            toolData.loadData();
            alert(`Loaded active session parameters for ${selectedTool.toUpperCase()}! Click "Synthesize Recommendations" to view your customized qualitative report.`);
        }
    });

    // Initial load
    loadToolInfo('copq');
}
