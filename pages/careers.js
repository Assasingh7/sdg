import Layout from '../components/Layout';

const JOBS = [
  {
    title: 'Senior Hospitality Interior Designer',
    location: 'New Delhi, India',
    type: 'Full-time',
    exp: '6+ Years Experience',
    desc: 'We are seeking an experienced Senior Interior Designer to lead hospitality projects from concept through to completion. You will work directly alongside our directors on large-scale luxury hotel, resort and F&B projects, maintaining Shokeen Design Group\'s high design standards and client relationships.',
    reqs: [
      '6+ years of experience in hospitality interior design (4–5 star hotels & resorts)',
      'Proficiency in AutoCAD, SketchUp, Revit, Adobe Suite and PowerPoint',
      'Strong technical drawing and documentation skills',
      'Experience coordinating design with contractors and consultants',
      'Excellent client presentation and communication skills',
    ],
    tags: ['AutoCAD', 'SketchUp', 'Revit', 'Hospitality', 'Senior Level'],
  },
  {
    title: 'Interior Designer — F&B & Restaurants',
    location: 'New Delhi, India',
    type: 'Full-time',
    exp: '3–5 Years Experience',
    desc: 'Join our studio to work on exciting restaurant, bar and lounge projects. You will collaborate with senior designers on concept development, space planning, material selection and client presentations for dynamic F&B environments.',
    reqs: [
      '3–5 years experience in restaurant or hospitality interior design',
      'Strong portfolio demonstrating F&B or lounge design work',
      'Proficiency in AutoCAD, Photoshop, SketchUp and InDesign',
      'Knowledge of materials, finishes and FF&E procurement',
      'Ability to manage multiple projects simultaneously',
    ],
    tags: ['F&B Design', 'AutoCAD', 'Photoshop', 'Mid Level'],
  },
  {
    title: 'FF&E Designer',
    location: 'New Delhi, India',
    type: 'Full-time',
    exp: '2–4 Years Experience',
    desc: 'We are looking for a detail-oriented FF&E Designer to source, specify and coordinate furniture, fixtures and equipment for our hospitality projects. You will work closely with our design teams and suppliers to ensure aesthetic alignment and seamless project delivery.',
    reqs: [
      '2–4 years experience in FF&E specification for hospitality or commercial projects',
      'Strong knowledge of furniture manufacturers, material suppliers and procurement',
      'Ability to create detailed mood boards, schedules and specification sheets',
      'Experience with SketchUp, Adobe Suite and Microsoft Office',
    ],
    tags: ['FF&E', 'Procurement', 'SketchUp', 'Adobe'],
  },
  {
    title: 'Senior Technical Architect',
    location: 'New Delhi, India',
    type: 'Full-time',
    exp: '10+ Years Experience',
    desc: 'We are seeking a Senior Technical Architect with extensive experience in hospitality and commercial projects to lead technical documentation, coordinate with structural and MEP consultants, and ensure delivery excellence across complex large-scale projects.',
    reqs: [
      '10+ years post-qualification experience in architecture (hospitality or mixed-use)',
      'Advanced proficiency in REVIT, AutoCAD, SketchUp and Adobe InDesign',
      'Experience leading technical coordination and documentation on large projects',
      'Strong knowledge of local building codes and construction methodologies',
      'Proven track record managing consultant teams and contractor relationships',
    ],
    tags: ['REVIT', 'AutoCAD', 'Architecture', 'Senior Level'],
  },
  {
    title: 'Design Visualiser / 3D Artist',
    location: 'New Delhi, India',
    type: 'Full-time',
    exp: '2–5 Years Experience',
    desc: 'We are looking for a talented 3D visualiser to create stunning architectural renders and animations for our client presentations. You will translate design concepts into photorealistic imagery that communicates our vision with impact and clarity.',
    reqs: [
      '2–5 years experience in architectural visualisation for hospitality or commercial projects',
      'Expert in 3ds Max, V-Ray or Corona Renderer, and Photoshop',
      'Strong understanding of lighting, materials and spatial composition',
      'Ability to interpret design drawings and work to tight project deadlines',
    ],
    tags: ['3ds Max', 'V-Ray', 'Photoshop', 'Visualisation'],
  },
];

export default function Careers() {
  return (
    <Layout title="Careers — Shokeen Design Group">
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('/images/proj8.jpg')" }}></div>
        <div className="page-hero-overlay"></div>
        <div className="page-hero-content">
          <p className="page-eyebrow">Join Shokeen Design Group</p>
          <h1 className="page-title"><em>Careers</em></h1>
        </div>
      </section>

      <div className="page-intro">
        <div>
          <p className="pi-eyebrow">Work With Us</p>
          <h2 className="pi-title">Shape the Future of Design</h2>
        </div>
        <p className="pi-body">At Shokeen Design Group, we believe that great design is the product of great people. We are always looking for talented, passionate individuals who share our commitment to excellence, cultural sensitivity and creative ambition. We offer a collaborative studio environment with projects spanning hotels, resorts, restaurants and commercial spaces across India and beyond. To apply for any position, send your CV and portfolio to <strong style={{ color: 'var(--white)' }}>careers@shokeendesigngroup.com</strong></p>
      </div>

      <section className="jobs-section">
        <div className="section-hdr" style={{ padding: '0 0 50px' }}>
          <div>
            <p className="sh-eyebrow">Open Positions</p>
            <h2 className="sh-title">Current <em>Openings</em></h2>
          </div>
        </div>

        {JOBS.map((job, i) => (
          <div key={i} className="job-item reveal-ready">
            <h3 className="job-title">{job.title}</h3>
            <div className="job-meta">
              <span>{job.location}</span>
              <span>{job.type}</span>
              <span>{job.exp}</span>
            </div>
            <p className="job-desc">{job.desc}</p>
            <ul className="job-reqs">
              {job.reqs.map((req, j) => <li key={j}>{req}</li>)}
            </ul>
            <div className="job-tags">
              {job.tags.map((tag, j) => <span key={j} className="job-tag">{tag}</span>)}
            </div>
            <a href="mailto:careers@shokeendesigngroup.com" className="job-apply">Apply Now &rarr;</a>
          </div>
        ))}
      </section>
    </Layout>
  );
}
