export const responses = {
  '00': 'Mesajınız başarıyla gönderilmiştir.',
  '20': 'Mesaj metninde ki problemden dolayı gönderilemediğini veya standart maksimum mesaj karakter sayısını geçtiğini ifade eder.(Standart maksimum karakter sayısı 917 dir.Eğer mesajınız türkçe karakter içeriyorsa Türkçe Karakter Hesaplama menüsunden karakter sayılarının hesaplanış şeklini görebilirsiniz.)',
  '30': 'Geçersiz kullanıcı adı, şifre veya kullanıcınızın API erişim izninin olmadığını gösterir.Ayrıca eğer API erişiminizde IP sınırlaması yaptıysanız ve sınırladığınız ip dışında gönderim sağlıyorsanız 30 hata kodunu alırsınız.API erişim izninizi veya IP sınırlamanızı, web arayüzden; sağ üst köşede bulunan ayarlar > API işlemleri menüsunden kontrol edebilirsiniz.',
  '40': 'Mesaj başlığınızın(gönderici adınızın) sistemde tanımlı olmadığını ifade eder.Gönderici adlarınızı API ile sorgulayarak kontrol edebilirsiniz.',
  '50': 'Abone hesabınız ile İYS kontrollü gönderimler yapılamamaktadır.',
  '51': 'Aboneliğinize tanımlı İYS Marka bilgisi bulunamadığını ifade eder.',
  '70': 'Hatalı sorgulama.Gönderdiğiniz parametrelerden birisi hatalı veya zorunlu alanlardan birinin eksik olduğunu ifade eder.',
  '80': 'Gönderim sınır aşımı',
  '85': "Mükerrer Gönderim sınır aşımı.Aynı numaraya 1 dakika içerisinde 20'den fazla görev oluşturulamaz.",
  '100': 'Sistem hatası.',
  '101': 'Sistem hatası.',
};
