# Agrawal Homeo Clinic - Full Stack Application Contracts

## Project Overview
Complete clone of Agrawal Homeo Clinic website with modern admin panel for content management.

## Frontend Implementation Status ✅
- **Complete Website Clone**: Hero section, treatments grid, process steps, special features, testimonials, contact sections
- **All Pages Created**: Home, About Clinic, About Founder, Treatments, Treatment Detail, Appointment, Contact, Policy Pages
- **Admin Panel**: Modern login page at `/admin/panel/login` with dashboard at `/admin/panel/dashboard`
- **Animations & Effects**: Hover effects, fade-in animations, floating elements, staggered animations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Mock Data**: Comprehensive treatment data, doctor info, testimonials, contact details

## API Contracts

### 1. Authentication APIs
```
POST /api/auth/admin/login
Body: { username: string, password: string }
Response: { token: string, user: object }

GET /api/auth/admin/verify
Headers: { Authorization: "Bearer <token>" }
Response: { valid: boolean, user: object }
```

### 2. Treatments Management
```
GET /api/treatments
Response: { treatments: Treatment[] }

POST /api/treatments
Body: { titleHindi: string, titleEnglish: string, image: string, description: string, symptoms: string[], treatment: string }
Response: { treatment: Treatment }

PUT /api/treatments/:id
Body: { titleHindi?: string, titleEnglish?: string, image?: string, description?: string, symptoms?: string[], treatment?: string }
Response: { treatment: Treatment }

DELETE /api/treatments/:id
Response: { success: boolean }
```

### 3. Appointments Management
```
POST /api/appointments
Body: { name: string, phone: string, email: string, age: number, gender: string, problem: string, symptoms: string, preferredTime: string }
Response: { appointment: Appointment, appointmentId: string }

GET /api/appointments
Headers: { Authorization: "Bearer <token>" }
Response: { appointments: Appointment[] }

PUT /api/appointments/:id/status
Body: { status: "pending" | "confirmed" | "completed" | "cancelled" }
Response: { appointment: Appointment }
```

### 4. Content Management
```
GET /api/content/site-settings
Response: { siteSettings: SiteSettings }

PUT /api/content/site-settings
Body: { title?: string, subtitle?: string, tagline?: string, hero?: object, contact?: object }
Response: { siteSettings: SiteSettings }

GET /api/content/doctor-info
Response: { doctorInfo: DoctorInfo }

PUT /api/content/doctor-info
Body: { name?: string, qualifications?: string, image?: string, about?: string }
Response: { doctorInfo: DoctorInfo }
```

### 5. Testimonials Management
```
GET /api/testimonials
Response: { testimonials: Testimonial[] }

POST /api/testimonials
Body: { name: string, text: string, rating: number }
Response: { testimonial: Testimonial }

PUT /api/testimonials/:id
Body: { name?: string, text?: string, rating?: number, approved?: boolean }
Response: { testimonial: Testimonial }
```

### 6. Contact & Inquiries
```
POST /api/contact
Body: { name: string, email: string, phone: string, subject: string, message: string }
Response: { inquiry: ContactInquiry, inquiryId: string }

GET /api/contact/inquiries
Headers: { Authorization: "Bearer <token>" }
Response: { inquiries: ContactInquiry[] }
```

## Database Models

### Treatment Model
```javascript
{
  _id: ObjectId,
  titleHindi: String,
  titleEnglish: String,
  slug: String,
  image: String,
  description: String,
  symptoms: [String],
  treatment: String,
  isActive: Boolean,
  createdAt: Date,
  updatedAt: Date
}
```

### Appointment Model
```javascript
{
  _id: ObjectId,
  name: String,
  phone: String,
  email: String,
  age: Number,
  gender: String,
  problem: String,
  symptoms: String,
  previousTreatment: String,
  preferredTime: String,
  status: String, // "pending", "confirmed", "completed", "cancelled"
  appointmentDate: Date,
  notes: String,
  createdAt: Date,
  updatedAt: Date
}
```

### Admin User Model
```javascript
{
  _id: ObjectId,
  username: String,
  password: String, // hashed
  email: String,
  role: String,
  isActive: Boolean,
  lastLogin: Date,
  createdAt: Date
}
```

### Site Settings Model
```javascript
{
  _id: ObjectId,
  title: String,
  subtitle: String,
  tagline: String,
  hero: {
    title: String,
    subtitle: String,
    clinicName: String,
    location: String,
    description: String
  },
  contact: {
    phone1: String,
    phone2: String,
    email: String,
    address1: String,
    address2: String
  },
  social: {
    youtube: String,
    whatsapp: String,
    instagram: String,
    facebook: String
  },
  updatedAt: Date
}
```

## Frontend-Backend Integration Plan

### 1. Replace Mock Data
- Update treatment grid to fetch from `/api/treatments`
- Replace static doctor info with API data
- Connect appointment form to backend API
- Load testimonials from database

### 2. Admin Panel Integration
- Implement JWT authentication
- Connect admin dashboard to real APIs
- Add CRUD operations for treatments
- Implement file upload for images
- Create content management interface

### 3. Real-time Features
- Email notifications for appointments
- WhatsApp integration for confirmations
- Dashboard analytics with real data

## File Upload Strategy
- Use multer for handling file uploads
- Store images in `/uploads` directory
- Implement image compression and optimization
- Support multiple formats (JPG, PNG, WebP)

## Security Considerations
- JWT token expiration (24 hours)
- Password hashing with bcrypt
- Input validation with Joi
- Rate limiting for API endpoints
- CORS configuration for production

## Environment Variables Needed
```
MONGO_URL=mongodb://localhost:27017/agrawal_clinic
JWT_SECRET=your_jwt_secret_key
ADMIN_EMAIL=admin@agrawalhomeoclinic.com
SMTP_HOST=smtp.gmail.com
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

## Testing Strategy
1. **Backend API Testing**: Test all CRUD operations
2. **Frontend Integration**: Verify data flow between components
3. **Admin Panel**: Test authentication and content management
4. **Form Submissions**: Verify appointment booking and contact forms
5. **Responsive Testing**: Check mobile and desktop layouts

## Deployment Checklist
- [ ] Environment variables configured
- [ ] Database seeded with initial data
- [ ] Admin user created
- [ ] File upload directories created
- [ ] Email service configured
- [ ] Frontend build optimized
- [ ] API rate limiting enabled

## Next Steps for Backend Implementation
1. Set up MongoDB models and schemas
2. Implement authentication middleware
3. Create CRUD endpoints for treatments
4. Build appointment management system
5. Add content management APIs
6. Integrate email notifications
7. Connect frontend to backend APIs
8. Test complete flow end-to-end