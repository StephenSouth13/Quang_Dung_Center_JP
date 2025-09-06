"use client"

import { useState, useEffect } from "react"

interface CMSContent {
  heroTitle: string
  heroSubtitle: string
  aboutDescription: string
  contactInfo: {
    address: string
    phone: string
    email: string
  }
  courses: Array<{
    id: string
    name: string
    price: string
    duration: string
    description: string
  }>
}

const defaultContent: CMSContent = {
  heroTitle: "Đồng hành cùng bạn chinh phục tiếng Nhật từ N5 đến N1",
  heroSubtitle: "Khóa học trực tuyến và trực tiếp với đội ngũ giảng viên giàu kinh nghiệm",
  aboutDescription: "Quang Dũng Center là trung tâm tiếng Nhật hàng đầu với hơn 10 năm kinh nghiệm...",
  contactInfo: {
    address: "123 Đường ABC, Quận 1, TP.HCM",
    phone: "0901234567",
    email: "info@quangdungcenter.com",
  },
  courses: [],
}

export function useCMSContent() {
  const [content, setContent] = useState<CMSContent>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchCMSContent()
  }, [])

  const fetchCMSContent = async () => {
    try {
      // Google Sheets CMS URL - replace with your actual deployment URL
      const CMS_URL = "https://script.google.com/macros/s/YOUR_CMS_DEPLOYMENT_ID/exec"

      const response = await fetch(CMS_URL)
      if (response.ok) {
        const data = await response.json()
        setContent(data)
      }
    } catch (error) {
      console.error("Error fetching CMS content:", error)
      // Fallback to default content
    } finally {
      setLoading(false)
    }
  }

  const updateContent = async (newContent: Partial<CMSContent>) => {
    try {
      const CMS_URL = "https://script.google.com/macros/s/YOUR_CMS_DEPLOYMENT_ID/exec"

      await fetch(CMS_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContent),
      })

      setContent((prev) => ({ ...prev, ...newContent }))
    } catch (error) {
      console.error("Error updating CMS content:", error)
    }
  }

  return { content, loading, updateContent, refreshContent: fetchCMSContent }
}

// Simple CMS Admin Panel Component
export function CMSAdminPanel() {
  const { content, updateContent } = useCMSContent()
  const [isEditing, setIsEditing] = useState(false)
  const [editContent, setEditContent] = useState(content)

  const handleSave = () => {
    updateContent(editContent)
    setIsEditing(false)
  }

  if (!isEditing) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsEditing(true)}
          className="bg-primary text-primary-foreground px-4 py-2 rounded-lg shadow-lg hover:bg-primary/90"
        >
          ✏️ Edit Content
        </button>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-card border border-border rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Content Management</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-2">Hero Title</label>
            <input
              type="text"
              value={editContent.heroTitle}
              onChange={(e) => setEditContent((prev) => ({ ...prev, heroTitle: e.target.value }))}
              className="w-full p-2 border border-border rounded bg-background"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Hero Subtitle</label>
            <textarea
              value={editContent.heroSubtitle}
              onChange={(e) => setEditContent((prev) => ({ ...prev, heroSubtitle: e.target.value }))}
              className="w-full p-2 border border-border rounded bg-background"
              rows={3}
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Contact Phone</label>
            <input
              type="text"
              value={editContent.contactInfo.phone}
              onChange={(e) =>
                setEditContent((prev) => ({
                  ...prev,
                  contactInfo: { ...prev.contactInfo, phone: e.target.value },
                }))
              }
              className="w-full p-2 border border-border rounded bg-background"
            />
          </div>
        </div>

        <div className="flex gap-3 mt-6">
          <button
            onClick={() => setIsEditing(false)}
            className="flex-1 px-4 py-2 border border-border rounded hover:bg-muted"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="flex-1 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}
